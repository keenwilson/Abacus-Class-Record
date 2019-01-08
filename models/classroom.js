const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  subject: { type: String, required: true },
  teachers: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
