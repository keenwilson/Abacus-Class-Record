const Classroom = require("../../models/classroom");
const mongoose = require("mongoose");
const Grade = mongoose.model("Grade");
const express = require("express");
const router = express.Router();

//Find grade with gradeId
router.get("/:id", async (req, res) => {
  const grade = await Grade.findById(req.params.id)
    .populate({
      path: "studentId"
    })
    .populate({
      path: "assignmentId"
    })
    .populate({
      path: "classroomId"
    });
  if (!grade)
    return res.status(404).send("The Grade with the given ID was not found.");

  res.send(grade);
});

// Find all grades with assignmentId /api/grades/assignment/:assignmentId
router.get("/assignment/:id", async (req, res) => {
  const grades = await Grade.find({
    assignmentId: req.params.id
  })
    .select("-__v")
    .populate({
      path: "studentId"
    })
    .populate({
      path: "assignmentId"
    })
    .populate({
      path: "classroomId"
    })
    .sort("");
  res.send(grades);
});

// Find all grades with studentId /api/grades/student/:studentId
router.get("/student/:id", async (req, res) => {
  const grades = await Grade.find({
    studentId: req.params.id
  })
    .select("-__v")
    .populate({
      path: "studentId"
    })
    .populate({
      path: "assignmentId"
    })
    .populate({
      path: "classroomId"
    })
    .sort("");
  res.send(grades);
});
// Create grade with classroomId
// req.body needs classroomId and assignmentId
router.post("/", async (req, res) => {
  console.log(req.body);
  Classroom.findById(req.body.classroomId, async function(err, classroom) {
    const studentsInClass = classroom.studentsId;
    const currentClassroomId = classroom._id;
    try {
      for (let student of studentsInClass) {
        const { _id: GradeId } = await new Grade({
          classroomId: currentClassroomId,
          studentId: student,
          assignmentId: req.body.assignmentId
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

//Update grade with gradeId in params and input in req.body
router.put("/:id", async (req, res) => {
  const grade = await Grade.findByIdAndUpdate(
    req.params.id,
    {
      grade: req.body.gradeInput
    },
    { new: true }
  )
    .populate({
      path: "studentId"
    })
    .populate({
      path: "assignmentId"
    })
    .populate({
      path: "classroomId"
    });

  if (!grade)
    return res.status(404).send("The grade with the given ID was not found.");

  console.log(grade);
  res.send(grade);
});

//Delete grade with gradeId
router.delete("/:id", async (req, res) => {
  const grade = await Grade.findByIdAndRemove(req.params.id)
    .populate({
      path: "studentId"
    })
    .populate({
      path: "assignmentId"
    })
    .populate({
      path: "classroomId"
    });
  if (!grade)
    return res.status(404).send("The Grade with the given ID was not found.");

  res.send(grade);
});

module.exports = router;
