const mongoose = require("mongoose");
const db = require("../models");
const Classroom = require("../models/classroom");
const Assignment = require("../models/assignment");
const Student = require("../models/student");

// This file empties the Classrooms, Students, Teachers collection and inserts the classrooms below

const MONGODB_URI =
  process.env.MONGODB_URL || "mongodb://localhost/fullstackclassroom";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};

const classroomSeed = [
  {
    subject: "Grade 7 Earth Science",
    teacher: "Ralph Fogarty",
    description: "",
    room: "253",
    imagePath:
      "https://www.edc.org/sites/default/files/images/earth-science.jpg",
    dateAdded: new Date(Date.now()),
    students: [
      { name: "Tanisha Ivery" },
      { name: "Rufus Dugger" },
      { name: "Kassie Deshaies" },
      { name: "Chet Kranz" },
      { name: "Edmund Byram" }
    ],
    assignments: [
      {
        title: "Lab 1 Water Clock"
      },
      {
        title: "Lab 2 Comparing Volume and Mass"
      },
      {
        title: "Activity A Human Clock"
      },
      {
        title: "Activity B Calculating Density"
      }
    ]
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });

  // await db.Classroom.deleteMany({});
  // await db.Teacher.deleteMany({});
  // await db.Student.deleteMany({});
  // await db.Assignment.deleteMany({});
  for (let classroom of classroomSeed) {
    const { _id: classroomId } = await new Classroom({
      subject: classroom.subject,
      room: classroom.room,
      imagePath: classroom.imagePath,
      dateAdded: classroom.dateAdded
    }).save();
    const assignments = classroom.assignments.map(assignment => ({
      ...assignment,
      classroomId
    }));
    await Assignment.insertMany(assignments);

    const students = classroom.students.map(student => ({
      ...student,
      classroomId: [].push(classroomId)
    }));
    await Student.insertMany(students);
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();
