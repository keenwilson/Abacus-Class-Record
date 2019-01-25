const Student = require("../../models/student");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
  const students = await Student.find()
    .select("-__v")
    .sort("lastName")
  res.send(students)
});

router.post("/", async (req, res) => {
  let student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  student = await student.save();

  res.send(student);
});

router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    },
    { new: true }
  );

  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  res.send(student);
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  res.send(student);
});

router.get("/:id", auth, async (req, res) => {
  const student = await Student.findById(req.params.id).select("-__v");

  if (!student)
    return res.status(404).send("The student with the given ID was not found.");

  res.send(student);
});

module.exports = router;
