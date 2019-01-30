const AssignmentStatus = require("../models/assignmentStatus");
const AssignmentType = require("../models/assignmentType");
const Assignment = require("../models/assignment");
const Grade = require("../models/grade");
const mongoose = require("mongoose");
require("dotenv").config();

const data = [
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Gustav Klimt’s Tree of Life",
    assignmentType: "Classwork",
    assignmentDesc:
      'Using tissue paper, glue, and black and white tempera paint, students will make mixed media art inspired by Gustav Klimt’s “Tree of Life"',
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-05",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Op Art Shaded Shapes",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students learn about “Op Art” and then create a picture (optical illusions) that can play tricks with the eyes.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-07",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Organic Shape and Line Collage",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students will learn about organic shapes as they discover how line, shape, and color are used to create art.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-12",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "A Drawing Adventure",
    assignmentType: "Homework",
    assignmentDesc:
      "Students will create drawings based on an imaginary journey. This is a great warm up activity or 15 minute end of class filler. It will get your students’ creative juices flowing!",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-14",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "A Box of Crayons",
    assignmentType: "Classwork",
    assignmentDesc:
      "Inspired by the book “The Crayon Box That Talked“, this lesson will show children that when we all work together, the results are much more interesting and colorful.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-14",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Adjective, Adjective Noun",
    assignmentType: "Classwork",
    assignmentDesc:
      "This lesson encourages drawing skills, imagination, and a sense of humor. Students will also learn about adjectives and nouns.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-19",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Architecture Shape Collage",
    assignmentType: "Classwork",
    assignmentDesc:
      "Let your child’s imagination run wild as she creates simple structures, massive monuments, and pretty palaces.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-21",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
    ]
  },
  {
    classroomId: "5c4f361ea46867002ae919e6",
    assignmentName: "Art from the Heart: Paint Collaboratively with Your Kids",
    assignmentType: "Homework",
    assignmentDesc:
      "A creative challenge for you and your kids to make art together.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-26",
    studentsId: [
      "5c4f3666a46867002ae919e7",
      "5c4f368ba46867002ae919e8",
      "5c4f369aa46867002ae919e9",
      "5c4f36aba46867002ae919ea",
      "5c4f36bda46867002ae919eb",
      "5c4f36d3a46867002ae919ec",
      "5c4f36e4a46867002ae919ed",
      "5c4f36f5a46867002ae919ee"
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
