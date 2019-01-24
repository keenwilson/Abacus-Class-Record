const Assignment = require("../../models/assignment");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
require("../../models/classroom");
require("../../models/student");

router.get("/", async (req, res) => {
  const assignment = await Assignment.find()
    .select("-__v")
    .sort("assignmentType");
  studentsInClass.map(classroom.student_id);
  console.log(student_id);
  res.send(assignment);
});

router.post("/", async (req, res) => {
  console.log("create assignment");
  const assignment = await new Assignment({
    classroomId: req.body.classroomId,
    assignmentName: req.body.assignmentName,
    assignmentDesc: req.body.assignmentDesc,
    assignmentType: req.body.assignmentType,
    dateSubmited: req.body.dateSubmitted,
    dueDate: req.body.assignmentDueDate
  }).save();

  if (!assignment)
    return res
      .status(404)
      .send("The assignment with the given ID was not found.");

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
