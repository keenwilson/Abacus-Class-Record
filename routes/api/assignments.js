const Assignment = require("../../models/assignment");
const Grade = require("../../models/grade");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const Classroom = require("../../models/classroom");
const Student = require("../../models/student");
const moment = require("moment");

// Create an assignment
router.post("/", async (req, res) => {
  const dueDate = req.body.dueDate;
  const parsedDueDate = moment(dueDate, "YYYY-MM-DD");
  const newDueDate = parsedDueDate.toDate();
  console.log("newDueDate", newDueDate);

  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const currentClassroomId = classroom._id;
    const studentsInClass = classroom.studentsId;
    // Create assignment for that classroom
    const assignment = await new Assignment({
      classroomId: currentClassroomId,
      assignmentName: req.body.assignmentName,
      assignmentType: req.body.assignmentType,
      assignmentDesc: req.body.assignmentDesc,
      maxScore: req.body.maxScore,
      weight: req.body.weight,
      dueDate: newDueDate
    }).save();

    const assignmentId = assignment._id;
    const assignmentWeight = assignment.weight;

    try {
      for (let student of studentsInClass) {
        const { _id: gradeId } = await new Grade({
          studentId: student,
          classroomId: currentClassroomId,
          assignmentId: assignmentId,
          weight: assignmentWeight
        }).save();
        console.log("create grade id: ", gradeId);
      }
      res.status(200).send(`The assignment is created with id ${assignmentId}`);
    } catch (error) {
      res.status(400).send("Invalid Assignment Id");
    }
  });
});

// See all assignments in that class
router.get("/:id", async (req, res) => {
  const assignment = await Assignment.find({
    classroomId: req.params.id
  })
    .select("-__v")
    .sort("dueDate")
    .populate({
      path: "classroomId"
    });

  res.send(assignment);
});

// Update the assignment with assignmentId
router.put("/:id", async (req, res) => {
  const dueDate = req.body.dueDate;
  const parsedDueDate = moment(dueDate, "YYYY-MM-DD");
  const newDueDate = parsedDueDate.toDate();
  console.log("newDueDate", newDueDate);

  const assignment = await assignment.findByIdAndUpdate(
    req.params.id,
    {
      dueDate: newDueDate,
      assignmentName: req.body.assignmentName,
      assignmentType: req.body.assignmentType,
      assignmentDesc: req.body.assignmentDesc,
      maxScore: req.body.maxScore,
      weight: req.body.weight
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
  const assignment = await Assignment.findByIdAndRemove(req.params.id);
  if (!assignment)
    return res
      .status(404)
      .send("The assignment with the given ID was not found.");

  res.send(assignment);
});

module.exports = router;
