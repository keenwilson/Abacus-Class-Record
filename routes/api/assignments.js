const Assignment = require("../../models/assignment");
const Grade = require("../../models/grade");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const Classroom = require("../../models/classroom");
const Student = require("../../models/student");
const moment = require("moment");

router.post("/", async (req, res) => {
  const dueDate = req.body.dueDate;
  const parsedDueDate = moment(dueDate, "YYYY-MM-DD");
  const newDueDate = parsedDueDate.toDate();
  console.log("newDueDate", newDueDate);

  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const currentClassroomId = classroom._id;
    const studentsInClass = classroom.studentsId;
    // Create assignment for that classroom
    const { _id: assignmentId } = await new Assignment({
      assignmentName: req.body.assignmentName,
      assignmentType: req.body.assignmentType,
      assignmentDesc: req.body.assignmentDesc,
      classroomId: currentClassroomId,
      dueDate: newDueDate,
      maxScore: req.body.maxScore
    }).save();

    try {
      for (let student of studentsInClass) {
        const { _id: gradeId } = await new Grade({
          studentId: student,
          classroomId: currentClassroomId,
          assignmentId: assignmentId,
          weight: req.body.weight,
          status: "Pending"
        }).save();
        console.log("create grade id: ", gradeId);
      }
      res.status(200).send(`The assignment is created with id ${assignmentId}`);
    } catch (error) {
      res.status(400).send("Invalid Assignment Id");
    }
  });
});

router.get("/", async (req, res) => {
  const assignment = await Assignment.find()
    .select("-__v")
    .sort("assignmentType");
  const studentsInClass = Classroom.studentId;
  studentsInClass.map(this.assignment);
  res.send(assignment);
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
