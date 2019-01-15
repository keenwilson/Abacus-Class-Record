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
    teacherId: Schema.Types.ObjectId,
    imagePath: { $type: String },
    roomNumber: { $type: String },
    studentsId: [Schema.Types.ObjectId],
    createdDate: { $type: Date, default: Date.now }
  },
  { typeKey: "$type" }
);

const Classroom = mongoose.model("Classroom", classroomSchema);
module.exports = Classroom;
