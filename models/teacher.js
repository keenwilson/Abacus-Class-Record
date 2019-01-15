const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new mongoose.Schema(
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
    email: {
      $type: String,
      required: true,
      index: true
    },
    classroomsId: [Schema.Types.ObjectId]
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Teacher", teacherSchema);
// module.exports = Teacher;
