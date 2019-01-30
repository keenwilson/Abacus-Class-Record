const AssignmentStatus = require("../models/assignmentStatus");
const AssignmentType = require("../models/assignmentType");
const Assignment = require("../models/assignment");
const Grade = require("../models/grade");
const mongoose = require("mongoose");
require("dotenv").config();

const data = [
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Aloha Chicka Chicka Boom Boom Bulletin Board",
    assignmentType: "Classwork",
    assignmentDesc:
      "Incorporate the state of Hawaii and the book Chicka Chicka Boom Boom, into a bulletin board.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-05",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Bean Mosaics",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students will learn about mosaics as they create a bean mosaic using dry legumes and seeds.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-07",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Block or Not? (Monoprinting and Stamping)",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students will use a monoprint stamp as a jumping off point for developing imagination and stimulating creativity.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "City Block Painting",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students will use lines of all kinds to create a painting of a city block using tempera paint.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Clay Sandcastles",
    assignmentType: "Classwork",
    assignmentDesc:
      "Children will develop their sculpture techniques and creativity by molding and decorating their own clay sand castles.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Color the Snow",
    assignmentType: "Classwork",
    assignmentDesc:
      "Create you own winter wonderland with colorful buckets of snow.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Coffee Can Drums",
    assignmentType: "Classwork",
    assignmentDesc:
      "Drums are an important part of life and ceremony in many cultures. Here is a simple method for you and your students to create a fun sounding drum as you celebrate the cultures of the world.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  },
  {
    classroomId: "5c4f43faa46867002ae91a20",
    assignmentName: "Corn Syrup Color Mixing",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students will learn to mix colors with unique art materials – corn syrup and food coloring.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f4414a46867002ae91a21",
      "5c4f4431a46867002ae91a22",
      "5c4f4445a46867002ae91a23",
      "5c4f4460a46867002ae91a24",
      "5c4f4472a46867002ae91a25",
      "5c4f4485a46867002ae91a26",
      "5c4f4499a46867002ae91a27"
    ]
  }
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
