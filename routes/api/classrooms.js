const { Classroom } = require("../../models/classroom");
const { Teacher } = require("../../models/teacher");
const { Student } = require("../../models/student");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const validateObjectId = require("../../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const classrooms = await Classroom.find()
    .select("-__v")
    .sort("subject");
  res.send(classrooms);
});

router.post("/", [auth], async (req, res) => {
  const teacher = await Teacher.findById(req.body.teacherId);
  if (!teacher) return res.status(400).send("Invalid teacher.");

  const classroom = new Classroom({
    subject: req.body.subject,
    teacher: {
      _id: teacher._id,
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.email
    },
    studentsId: req.body.studentsId,
    imagePath: req.body.imagePath,
    roomNumber: req.body.roomNumber,
    createdDate: moment().toJSON()
  });
  await classroom.save();

  res.send(classroom);
});

router.put("/:id", [auth], async (req, res) => {
  const teacher = await Teacher.findById(req.body.teacherId);
  if (!teacher) return res.status(400).send("Invalid teacher.");

  const classroom = await Classroom.findByIdAndUpdate(
    req.params.id,
    {
      subject: req.body.subject,
      teacher: {
        _id: teacher._id,
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        email: teacher.email
      },
      imagePath: req.body.imagePath,
      roomNumber: req.body.roomNumber,
      studentsId: req.body.studentsId
    },
    { new: true }
  );

  if (!classroom)
    return res
      .status(404)
      .send("The classroom with the given ID was not found.");

  res.send(classroom);
});

router.delete("/:id", [auth, admin], async (req, res) => {
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
