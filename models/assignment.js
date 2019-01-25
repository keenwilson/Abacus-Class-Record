const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new mongoose.Schema(
  {
    assignmentName: {
      $type: String,
      required: true
    },
    assignmentType: {
      $type: String,
      required: true
    },
    assignmentDesc: {
      $type: String,
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom"
    },
    studentId: {
      $type: Schema.Types.ObjectId,
      required: true
    },
    dueDate: {
      $type: Number
    },
    dateSubmitted: {
      $type: Number,
    },
    students: [
      {
        $type: Schema.Types.ObjectId,
        ref: 'Student',
      }],
      grade: {
        $type: Number
      },
    commentBody: { $type: String }
  },
  { typeKey: "$type" }
);

assignmentSchema.statics.lookup = function (studentId, classroomId) {
  return this.findOne({
    "student._id": studentId,
    "classroom._id": classroomId
  });
};

assignmentSchema.methods.submit = function () {
  this.dateSubmitted = new Date();
};

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
