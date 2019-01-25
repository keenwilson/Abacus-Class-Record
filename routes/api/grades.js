const Grade  = require("../../models/Grade");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const Classroom = require("../../models/classroom")
const Student = require('../../models/student')

router.get("/", async (req, res) => {
    const grades = await Grade.find()
        .select("-__v")
        .sort("currentGrade")
    res.send(grades);

});

router.post("/", async (req, res) => {
    const classDate = req.body.classDate;
    const parsedClassDate = moment(classDate, "YYYY-MM-DD");
    const newClassDate = parsedClassDate.toDate();
    console.log(newClassDate);

    Classroom.findById(req.body.classroomId, async function (err, classroom) {
        const studentsInClass = classroom.studentsId;
        const currentClassroomId = classroom._id;
        const currentAssignmentId = assignment._id;
        const currentGradeOfStudent = Student.Grade
        try {
            for (let student of studentsInClass) {
                const { _id: GradeId } = await new Grade({
                    classroomId: currentClassroomId,
                    studentId: student,
                    classDate: newClassDate,
                    assignmentId: currentAssignmentId,
                    currentGrade: currentGradeOfStudent,
                    grade: Grade._id
                }).save();
            }
            res
                .status(200)
                    Grade.find('assignmentGrade')
                    .select('-___v')
                    .exec()
                    const arr = []
                    let grade = Grade.assignmentGrade
                    let gradeArr = grade.push( arr )
                    let sum = gradeArr.reduce(( a, b ) => a + b, 0);
                    console.log(sum)
                .send(sum)
        } catch (error) {
            res.status(400).send('Invalid Grade Id')
        }
    });
});

router.put("/:id", async (req, res) => {
    const Grade = await Grade.findByIdAndUpdate(
        req.params.id,
        {
            assignmentGrade:Assignment.grade
        },
        { new: true }
    );

  if (!grade)
    return res
      .status(404)
      .send("The grade with the given ID was not found.");

  res.send(grade);
});

router.delete("/:id", async (req, res) => {
  const grade = await Grade.findByIdAndRemove(req.params.id);
  if (!Grade)
    return res
      .status(404)
      .send("The Grade with the given ID was not found.");

  res.send(grade);
});


router.get("/:id", async (req, res) => {
  const grade = await Grade.findById(req.params.id).select("-__v");
  if (!Grade)
    return res
      .status(404)
      .send("The Grade with the given ID was not found.");

  res.send(grade);
});

module.exports = router;
