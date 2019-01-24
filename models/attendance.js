const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema(
  {
    classDate: {
      $type: Date
    },
    isPresent: {
      $type: Boolean,
      default: false
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom"
    },
    studentId: {
      $type: Schema.Types.ObjectId,
      ref: "Student"
    },
    status: {
      $type: String
    }
  },
  { typeKey: "$type" }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
