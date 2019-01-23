const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const assignmentSchema = new Schema(
  {
    assignmentName: {
      $type: String,
      required: true
    },
    assignmentType: {
      $type: String,
      required: true
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      required: true
    },
    dueDate: {
      $type:Number
    },
    dateSubmitted: {
      $type:Number,
    },
    commentBody: { $type: String }
  },
  { typeKey: "$type" }
);

assignmentSchema.statics.lookup = function(studentId, classroomId) {
  return this.findOne({
    "student._id": studentId,
    "classroom._id": classroomId
  });
};

assignmentSchema.methods.submit = function() {
  this.dateSubmitted = new Date();
};

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
