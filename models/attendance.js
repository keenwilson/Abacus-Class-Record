const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new mongoose.Schema(
  {
    classDate: {
      $type: Date,
      index: true
    },
    isPresent: {
      $type: Boolean,
      default: false
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom"
    },
    studentsId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Student"
      }
    ]
  },
  { typeKey: "$type" }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
