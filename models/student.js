const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    firstName: {
      $type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    lastName: {
      $type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    classroomsId: [{ $type: Schema.Types.ObjectId, ref: "Classroom" }],
    teachersId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Teacher"
      }
    ],
    attendance: [
      {
        attendanceId: {
          $type: Schema.Types.ObjectId,
          ref: "Attendace"
        },
        isCheckedIn: { $type: Boolean, default: false }
      }
    ],
    assignments: [
      {
        assignmentId: {
          $type: Schema.Types.ObjectId,
          ref: "Assignment"
        },
        grade: String,
        dateSubmitted: Date
      }
    ]
  },
  { typeKey: "$type" }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
