const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentTypeSchema = new mongoose.Schema(
  {
    name: {
      $type: String,
      required: true
    }
  },
  { typeKey: "$type" }
);

const AssignmentType = mongoose.model("AssignmentType", assignmentTypeSchema);
module.exports = AssignmentType;
