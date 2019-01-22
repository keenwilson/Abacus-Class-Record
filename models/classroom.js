const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classroomSchema = new mongoose.Schema(
  {
    subject: {
      $type: String,
      minlength: 5,
      maxlength: 150,
      required: true,
      index: true
    },
    teacherId: {
      $type: Schema.Types.ObjectId,
      ref: "Teacher"
    },
    imagePath: { $type: String },
    roomNumber: { $type: String },
    studentsId: [{ $type: Schema.Types.ObjectId, ref: "Student" }],
    createdDate: { $type: Date, default: Date.now },
    attendanceId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Attendance"
      }
    ]
  },
  { typeKey: "$type" }
);

const Classroom = mongoose.model("Classroom", classroomSchema);
module.exports = Classroom;
