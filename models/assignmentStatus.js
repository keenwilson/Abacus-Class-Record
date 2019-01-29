const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentStatusSchema = new mongoose.Schema(
  {
    name: {
      $type: String,
      required: true
    }
  },
  { typeKey: "$type" }
);

const AssignmentStatus = mongoose.model(
  "AssignmentStatus",
  assignmentStatusSchema
);
module.exports = AssignmentStatus;
