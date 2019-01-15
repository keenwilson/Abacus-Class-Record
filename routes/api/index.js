const router = require("express").Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth");
const classroomsRoutes = require("./classrooms");
const studentsRoutes = require("./students");
const teachersRoutes = require("./teachers");

// Users routes
router.use("/users", usersRoutes);

// Auth Routes
router.use("/auth", authRoutes);

// Classrooms Routes
router.use("/classrooms", classroomsRoutes);

// Students Routes
router.use("/students", studentsRoutes);

// Students Routes
router.use("/teachers", teachersRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
