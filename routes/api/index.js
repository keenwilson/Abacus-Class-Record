const router = require("express").Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth");
const classroomsRoutes = require("./classrooms");
const studentsRoutes = require("./students");
const teachersRoutes = require("./teachers");
const attendaceRoutes = require("./attendance");
const assignmentsRoutes = require("./assignments");
const gradesRoutes = require("./grades");

// Users routes
router.use("/users", usersRoutes);

// Auth Routes
router.use("/auth", authRoutes);

// Classrooms Routes
router.use("/classrooms", classroomsRoutes);

// Students Routes
router.use("/students", studentsRoutes);

// Teachers Routes
router.use("/teachers", teachersRoutes);

// Attendace Routes
router.use("/attendance", attendaceRoutes);

// Assignment Routes
router.use("/assignments", assignmentsRoutes);

// Assignment Routes
router.use("/grades", gradesRoutes);

module.exports = router;
