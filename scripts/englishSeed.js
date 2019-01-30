const AssignmentStatus = require("../models/assignmentStatus");
const AssignmentType = require("../models/assignmentType");
const Assignment = require("../models/assignment");
const Grade = require("../models/grade");
const mongoose = require("mongoose");
require("dotenv").config();

const data = [
  {
    classroomId: "",
    assignmentName: "",
    assignmentType: "Classwork",
    assignmentDesc: "",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-05",
    studentsId: ["", "", "", "", "", "", ""]
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

async function seed() {
  // Connect to the Mongo DB
  const MONGODB_URI =
    "mongodb://keenwilson:k12345678@ds149034.mlab.com:49034/heroku_wr3gnt8m";
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  };
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Connected to Database");
    })
    .catch(err => {
      console.log("Not Connected to Database ERROR! ", err);
    });

  for (let assignment of data) {
    const { _id: assignmentId } = await new Assignment({
      classroomId: assignment.classroomId,
      assignmentName: assignment.assignmentName,
      assignmentType: assignment.assignmentType,
      assignmentDesc: assignment.assignmentDesc,
      maxScore: assignment.maxScore,
      weight: assignment.weight
    }).save();

    const grades = assignment.studentsId.map(student => ({
      assignmentId: assignmentId,
      studentId: student,
      classroomId: assignment.classroomId
    }));
    await Grade.insertMany(grades);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
