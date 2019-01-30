const AssignmentStatus = require("../models/assignmentStatus");
const AssignmentType = require("../models/assignmentType");
const Assignment = require("../models/assignment");
const Grade = require("../models/grade");
const mongoose = require("mongoose");
require("dotenv").config();

const data = [
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Revise Your Adverbs",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students revise distinguishing between adverbs of manner, time, place and frequency.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-11",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Exploring Poetry 1: 'The Eagle'",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students explore different aspects of poetry. The worksheet is based on the following poem by Lord Alfred Tennyson (1809–1892).",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-13",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Know Your Punctuation: Brackets for Parenthesis",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students revise and practise using brackets to add parentheses to sentences.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-15",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Introducing Mr Shakespeare! 1",
    assignmentType: "Journal",
    assignmentDesc:
      "Students are introduced to the language of Shakespeare and his plays.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-18",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Writing a Logical Argument: School Trips",
    assignmentType: "Homework",
    assignmentDesc:
      "students use a step-by step guide to help them develop their own logical arguments.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-20",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Know Your Adjectives: Comparatives and Superlatives",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students revise and practise different ways of forming comparative and superlative adjectives.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-25",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Writing a Short Story: The Mystery of the Empty House",
    assignmentType: "Homework",
    assignmentDesc:
      "This worksheet is a writing task, where you must write a story within a set time limit. You may need to ask your parent or guardian to time you, and don't worry if you haven't finished when the time is up. When you've finished, ask your parent or guardian to mark your work and let you know what your score was, and possibly give you a target for next time.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-27",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Recognise Relative Clauses",
    assignmentType: "Classwork",
    assignmentDesc:
      "Students practise identifying relative clauses and choosing appropriate relative pronouns.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-20",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
    ]
  },
  {
    classroomId: "5c4ce33931c999002a03c82a",
    assignmentName: "Writing About Past Experience",
    assignmentType: "Paper",
    assignmentDesc:
      "Students learn how to help improve their understanding of writing about experience, generally in the past tense.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-27",
    studentsId: [
      "5c4ce36231c999002a03c82b",
      "5c4ce37e31c999002a03c82c",
      "5c4ce39631c999002a03c82d",
      "5c4ce3ac31c999002a03c82e",
      "5c4ce3c131c999002a03c82f",
      "5c4ce3d331c999002a03c830",
      "5c4ce3ec31c999002a03c831",
      "5c4ce40231c999002a03c832",
      "5c4ce41731c999002a03c833",
      "5c4ce42b31c999002a03c834",
      "5c4ce43c31c999002a03c835",
      "5c4ce45431c999002a03c836"
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
