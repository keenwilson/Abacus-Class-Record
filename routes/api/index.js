const router = require("express").Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth");
const classroomRoutes = require("./classrooms");

// Users routes
router.use("/users", usersRoutes);

// Auth Routes
router.use("/auth", authRoutes);

// Classrooms Routes
router.use("/classrooms", classroomRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
