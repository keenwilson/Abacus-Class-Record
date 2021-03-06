const AssignmentStatus = require("../models/assignmentStatus");
const AssignmentType = require("../models/assignmentType");
const Assignment = require("../models/assignment");
const Grade = require("../models/grade");
const mongoose = require("mongoose");
require("dotenv").config();

const data = [
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Comparing Exponents",
    assignmentType: "Classwork",
    assignmentDesc: "Have students compare the end value of these exponents",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-04",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Function Tables",
    assignmentType: "Classwork",
    assignmentDesc:
      "Input the variables into the equations and see what comes out.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-06",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Math Operations and Reasoning",
    assignmentType: "Classwork",
    assignmentDesc:
      "Every problem is missing three to four operators. Make each equation true.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-08",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Surface Area",
    assignmentType: "Homework",
    assignmentDesc:
      "If you can write a number as a fraction or simple ratio, it's rational. Take a quick glance at these specimens and determine if they are rational.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-11",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Circle the Irrational Numbers",
    assignmentType: "Classwork",
    assignmentDesc:
      "Input the variables into the equations and see what comes out.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-13",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Operations with Exponents",
    assignmentType: "Classwork",
    assignmentDesc:
      "We take exponents out for a walk and throw them into 2 and 3 step problems.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-15",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Scientific Notation",
    assignmentType: "Classwork",
    assignmentDesc:
      "Meeting up with our friend times ten to the exponent. Write each number using scientific notation then move on to standard format. Pay attention to number 3. What's up with that one?",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-18",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
    ]
  },
  {
    classroomId: "5c4ce1e431c999002a03c829",
    assignmentName: "Venn Diagrams In Math",
    assignmentType: "Homework",
    assignmentDesc:
      "We always knew that Venn Diagrams had a huge place in the Language Arts classroom, but they do the same thing when organizing data. Venn Diagrams should be used in the math classroom just as much.",
    maxScore: 10,
    weight: 1,
    dueDate: "2019-02-20",
    studentsId: [
      "5c4ca11685d70b489ca60490",
      "5c4ca15d85d70b489ca60492",
      "5c4ca20585d70b489ca60499",
      "5c4ca21c85d70b489ca6049a",
      "5c4ca13b85d70b489ca60491",
      "5c4ca1ad85d70b489ca60495",
      "5c4ca17585d70b489ca60493",
      "5c4ca19085d70b489ca60494",
      "5c4ca1c485d70b489ca60496",
      "5c4ca1ec85d70b489ca60498"
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

  await Assignment.deleteMany({});
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
