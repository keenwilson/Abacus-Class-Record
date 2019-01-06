const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Classrooms collection and inserts the classrooms below

var MONGODB_URI =
  process.env.MONGODB_URL || "mongodb://localhost/reactclassroomapp";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(
  MONGODB_URI,
  options
);

const classroomSeed = [
  {
    subject: "subject1",
    techer: "teacher1",
    date: new Date(Date.now())
  },
  {
    subject: "subject2",
    techer: "teacher2",
    date: new Date(Date.now())
  }
];

db.Classroom.remove({})
  .then(() => db.Classroom.collection.insertMany(classroomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
