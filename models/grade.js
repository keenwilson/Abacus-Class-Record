const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new mongoose.Schema(
  {
    studentId: {
      $type: Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom",
      required: true
    },
    assignmentId: {
      $type: Schema.Types.ObjectId,
      ref: "Assignment",
      required: true
    },
    grade: {
      $type: Number,
      default: 10
    },
    weight: {
      $type: Number,
      default: 1
    },
    status: {
      $type: String
    }
  },
  { typeKey: "$type" }
);

const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade;
