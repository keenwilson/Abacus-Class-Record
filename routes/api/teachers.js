const Teacher = require("../../models/teacher");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

router.get("/", async (req, res) => {
  const teachers = await Teacher.find().select("-__v");
  res.send(teachers);
});

router.post("/", async (req, res) => {
  let teacher = new Teacher({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  teacher = await teacher.save();

  res.send(teacher);
});

router.put("/:id", async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      classroomsId: req.body.classroomsId
    },
    { new: true }
  );

  console.log(teacher);

  if (!teacher)
    return res.status(404).send("The teacher with the given ID was not found.");

  res.send(teacher);
});

router.delete("/:id", async (req, res) => {
  const teacher = await Teacher.findByIdAndRemove(req.params.id);

  if (!teacher)
    return res.status(404).send("The teacher with the given ID was not found.");

  res.send(teacher);
});

router.get("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id).select("-__v");

  if (!teacher)
    return res.status(404).send("The teacher with the given ID was not found.");

  res.send(teacher);
});

module.exports = router;
