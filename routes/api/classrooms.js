const Classroom = require("../../models/classroom");
const Teacher = require("../../models/teacher");
const Student = require("../../models/student");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const validateObjectId = require("../../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Get all classrooms in the database
router.get("/", async (req, res) => {
  const classrooms = await Classroom.find()
    .select("-__v")
    .sort("subject");
  res.send(classrooms);
});

// Create a new classroom with a valid teacher Id
router.post("/", async (req, res) => {
  console.log("req", req.body.subject);

  const classroom = new Classroom({
    subject: req.body.subject,
    teacherId: req.body.teacherId,
    studentsId: req.body.studentsId,
    imagePath: req.body.imagePath,
    roomNumber: req.body.roomNumber,
    createdDate: moment().toJSON()
  });
  const { _id: classroomId } = await classroom.save();
  console.log("classroomId from PUT api", classroomId);

  // Find the current array of teacher's classroomsId
  const teacher = await Teacher.findById(req.body.teacherId);
  if (!teacher) return res.status(400).send("Invalid teacher.");

  console.log(
    "Found teacher",
    teacher.firstName + " " + teacher.lastName + " " + teacher._id
  );
  const clonedClassroomsId = teacher.classroomsId;
  clonedClassroomsId.push(classroomId);

  try {
    Teacher.findByIdAndUpdate(
      teacher._id,
      {
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        email: teacher.email,
        classroomsId: clonedClassroomsId
      },
      { new: true },
      function() {
        console.log("Updated teacher's classroomsId");
      }
    );
  } catch (error) {
    console.log(error);
  }

  res.send(classroom);
});

// Add students to the classroom with /api/classrooms/:id/add/:studentId
router.put("/:id/add/:studentId", async (req, res) => {
  console.log(req.params);
  const currentClassroomId = req.params.id;
  // Identify a student from the database
  const student = await Student.findById(req.params.studentId);
  if (!student) return res.status(400).send("Invalid student id.");

  // Find the current array of Classroom's studentsId
  const classroom = await Classroom.findById(req.params.id);
  if (!classroom) return res.status(400).send("Invalid classroom.");

  console.log("Found classroom", classroom.subject + " id: " + classroom._id);

  const clonedStudentsId = classroom.studentsId;
  console.log("Original clonedStudentsId ", clonedStudentsId);
  clonedStudentsId.push(student._id);
  console.log("New clonedStudentsId ", clonedStudentsId);

  const updatedClassroom = await Classroom.findByIdAndUpdate(
    req.params.id,
    {
      subject: classroom.subject,
      teacherId: classroom.teacherId,
      imagePath: classroom.imagePath,
      roomNumber: classroom.roomNumber,
      studentsId: clonedStudentsId
    },
    { new: true }
  );

  if (!updatedClassroom)
    return res
      .status(404)
      .send("The classroom with the given ID was not found.");

  console.log(
    "Found student",
    student.firstName + " " + student.lastName + " " + student._id
  );
  const clonedClassroomsId = student.classroomsId;
  console.log("clonedClassroomsId", clonedClassroomsId);
  clonedClassroomsId.push(currentClassroomId);

  try {
    Student.findByIdAndUpdate(
      student._id,
      {
        firstName: student.firstName,
        lastName: student.lastName,
        classroomsId: clonedClassroomsId
      },
      { new: true },
      function() {
        console.log("Updated student's classroomsId");
      }
    );
  } catch (error) {
    console.log(error);
  }

  res.send(updatedClassroom);
});

router.delete("/:id", async (req, res) => {
  const classroom = await Classroom.findByIdAndRemove(req.params.id);

  if (!classroom)
    return res
      .status(404)
      .send("The classroom with the given ID was not found.");

  res.send(classroom);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const classroom = await Classroom.findById(req.params.id).select("-__v");

  if (!classroom)
    return res
      .status(404)
      .send("The classroom with the given ID was not found.");

  res.send(classroom);
});

module.exports = router;
