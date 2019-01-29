const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssignmentType = require("./assignmentType");

const assignmentSchema = new mongoose.Schema(
  {
    assignmentName: {
      $type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255
    },
    assignmentType: {
      $type: String,
      required: true
    },
    assignmentDesc: {
      $type: String,
      trim: true
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom"
    },
    dueDate: {
      $type: Date
    },
    maxScore: {
      $type: Number,
      default: 10
    }
  },
  { typeKey: "$type" }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
