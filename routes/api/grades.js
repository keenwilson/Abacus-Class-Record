const Classroom = require("../../models/classroom");
const Student = require("../../models/student");
const Grade = require("../../models/Grade");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const grades = await Grade.find()
    .select("-__v")
    .sort("currentGrade");
  res.send(grades);
});

// Create grade with classroomId
// req.body needs classroomId
router.post("/", async (req, res) => {
  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const studentsInClass = classroom.studentsId;
    const currentClassroomId = classroom._id;
    try {
      for (let student of studentsInClass) {
        const { _id: GradeId } = await new Grade({
          classroomId: currentClassroomId,
          studentId: student
        }).save();
      }
      res
        .status(200)
        .send(
          `The grade object for the classroom ID: ${currentClassroomId} is created to all ${
            studentsInClass.length
          } students in this class.`
        );
    } catch (error) {
      res.status(400).send("Invalid Grade Id");
    }
  });
});

router.put("/:id", async (req, res) => {
  const Grade = await Grade.findByIdAndUpdate(
    req.params.id,
    {
      assignmentGrade: Assignment.grade
    },
    { new: true }
  );

  if (!grade)
    return res.status(404).send("The grade with the given ID was not found.");

  res.send(grade);
});

router.delete("/:id", async (req, res) => {
  const grade = await Grade.findByIdAndRemove(req.params.id);
  if (!Grade)
    return res.status(404).send("The Grade with the given ID was not found.");

  res.send(grade);
});

router.get("/:id", async (req, res) => {
  const grade = await Grade.findById(req.params.id).select("-__v");
  if (!Grade)
    return res.status(404).send("The Grade with the given ID was not found.");

  res.send(grade);
});

module.exports = router;
