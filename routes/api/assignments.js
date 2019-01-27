const Assignment = require("../../models/assignment");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const Classroom = require("../../models/classroom");
const Student = require("../../models/student");
const moment = require("moment");

router.get("/", async (req, res) => {
  const assignment = await Assignment.find()
    .select("-__v")
    .sort("assignmentType");
  const studentsInClass = Classroom.studentId;
  studentsInClass.map(this.assignment);
  res.send(assignment);
});

router.post("/", async (req, res) => {
  const classDate = req.body.classDate;
  const parsedClassDate = moment(classDate, "YYYY-MM-DD");
  const newClassDate = parsedClassDate.toDate();
  console.log(newClassDate);

  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const studentsInClass = classroom.studentsId;
    const currentClassroomId = classroom._id;
    try {
      for (let student of studentsInClass) {
        const { _id: assignmentId } = await new Assignment({
          classroomId: currentClassroomId,
          studentId: student,
          classDate: newClassDate,
          assignmentName: req.body.assignmentName,
          assignmentDesc: req.body.assignmentDesc,
          assignmentType: req.body.assignmentType,
          dateSubmited: req.body.dateSubmitted,
          dueDate: moment(req.body.assignmentDueDate, MM / DD / YYYY)
        }).save();
      }
      res.status(200).send(assignment);
    } catch (error) {
      res.status(400).send("Invalid Assignment Id");
    }
  });
});

router.put("/:id", async (req, res) => {
  const assignment = await assignment.findByIdAndUpdate(
    req.params.id,
    {
      assignmentName: req.body.assignmentName,
      assignmentDesc: req.body.assignmentDesc,
      assignmentType: req.body.assignmentType,
      startDate: req.body.assignmentStartDate,
      dueDate: req.body.assignmentDueDate
    },
    { new: true }
  );

  if (!assignment)
    return res
      .status(404)
      .send("The assignment with the given ID was not found.");

  res.send(assignment);
});

router.delete("/:id", async (req, res) => {
  const assignment = await Assignment.findByIdAndRemove(req.params.id);
  if (!assignment)
    return res
      .status(404)
      .send("The assignment with the given ID was not found.");

  res.send(assignment);
});

router.get("/:id", async (req, res) => {
  const assignment = await Assignment.findById(req.params.id).select("-__v");
  if (!assignment)
    return res
      .status(404)
      .send("The assignment with the given ID was not found.");

  res.send(assignment);
});

module.exports = router;
