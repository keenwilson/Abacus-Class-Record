const router = require("express").Router();
const classroomsController = require("../../controllers/classroomsController");

// Matches with "/api/classrooms"
router
  .route("/")
  .get(classroomsController.findAll)
  .post(classroomsController.create);

// Matches with "/api/classrooms/:id"
router
  .route("/:id")
  .get(classroomsController.findById)
  .put(classroomsController.update)
  .delete(classroomsController.remove);

module.exports = router;
