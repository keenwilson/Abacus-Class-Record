const Classroom = require("../../models/classroom");
const Attendance = require("../../models/attendance");
const validateObjectId = require("../../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Get all attendances with ClassroomId on a given class date
router.get("/:id/:classDate", async (req, res) => {
  const classroomId = req.params.id;
  // Parse classDate with moment
  const classDate = req.params.classDate;
  const parsedClassDate = moment(classDate, "YYYY-MM-DD");
  const newClassDate = parsedClassDate.toDate();

  const attendance = await Attendance.find({
    classroomId: req.params.id,
    classDate: newClassDate
  })
    .select("-__v")
    .sort("studentId")
    .populate({
      path: "studentId",
      select: "-teachersId"
    })
    .populate({
      path: "classroomId"
    });
  res.send(attendance);
  console.log("Router receives api", attendance);
});

// Check in all students into a classroom with a classroomId and classDate
router.put("/checkin/:id/:classDate/", async (req, res) => {
  const classroomId = req.params.id;
  // Parse classDate with moment
  const classDate = req.params.classDate;
  const parsedClassDate = moment(classDate, "YYYY-MM-DD");
  const newClassDate = parsedClassDate.toDate();

  const attendances = await Attendance.find(
    {
      classroomId: req.params.id,
      classDate: newClassDate
    },
    { new: true },
    async function(err, foundAttendances) {
      try {
        for (let attendance of foundAttendances) {
          await Attendance.findByIdAndUpdate(
            attendance._id,
            {
              isPresent: true
            },
            { upsert: true, new: true }
          );
        }
        res
          .status(200)
          .send(
            `The attendance for the classroom ID: ${classroomId} on the given class date: ${classDate} is updated to true to all ${
              foundAttendances.length
            } students in this class.`
          );
      } catch (error) {
        res.status(400).send("Invalid attendance Id.");
      }
    }
  );
});

// Check in all students into a classroom with a classroomId and classDate
router.put("/checkout/:id/:classDate/", async (req, res) => {
  const classroomId = req.params.id;
  // Parse classDate with moment
  const classDate = req.params.classDate;
  const parsedClassDate = moment(classDate, "YYYY-MM-DD");
  const newClassDate = parsedClassDate.toDate();

  const attendances = await Attendance.find(
    {
      classroomId: req.params.id,
      classDate: newClassDate
    },
    { upsert: true, new: true },
    async function(err, foundAttendances) {
      try {
        for (let attendance of foundAttendances) {
          await Attendance.findByIdAndUpdate(
            attendance._id,
            {
              isPresent: false
            },
            { new: true }
          );
        }
        res
          .status(200)
          .send(
            `The attendance for the classroom ID: ${classroomId} on the given class date: ${classDate} is updated to false to all ${
              foundAttendances.length
            } students in this class.`
          );
      } catch (error) {
        res.status(400).send("Invalid attendance Id.");
      }
    }
  );
});

// Create an attendace with ClassroomId and date of class
router.post("/", async (req, res) => {
  console.log(req.body);
  // Parse classDate with moment
  const classDate = req.body.classDate;
  const parsedClassDate = moment(classDate, "YYYY-MM-DD");
  const newClassDate = parsedClassDate.toDate();
  console.log(newClassDate);

  // Find all students in that classroom
  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const studentsInClass = classroom.studentsId;
    const currentClassroomId = classroom._id;
    try {
      for (let student of studentsInClass) {
        const { _id: attendanceId } = await new Attendance({
          classroomId: currentClassroomId,
          studentId: student,
          classDate: newClassDate
        }).save();
      }
      res
        .status(200)
        .send(
          `The attendance for the classroom ID: ${currentClassroomId} on the given class date: ${newClassDate} is created to all ${
            studentsInClass.length
          } students in this class.`
        );
    } catch (error) {
      res.status(400).send("Invalid classroom Id.");
    }
  });
});

// Check a student into a classroom with a unique attendance Id
router.put("/:id", validateObjectId, async (req, res) => {
  const originalAttendance = await Attendance.findById(req.params.id);

  const clonedStatus = originalAttendance.isPresent;
  const toggledStatus = clonedStatus === true ? false : true;

  const attendance = await Attendance.findByIdAndUpdate(req.params.id, {
    isPresent: toggledStatus
  });
  res.send(attendance);
});

// Remove attendance
router.delete("/:id", validateObjectId, async (req, res) => {
  const attendance = await Attendance.findByIdAndRemove(req.params.id);

  if (!attendance)
    return res
      .status(404)
      .send("The attendance with the given ID was not found.");

  res.send(attendance);
});

module.exports = router;
