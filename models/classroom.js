const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  subject: { type: String, required: true },
  teacher: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Book;
