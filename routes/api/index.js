const router = require("express").Router();
const classroomRoutes = require("./classrooms");

// Book routes
router.use("/classrooms", classroomRoutes);

module.exports = router;
