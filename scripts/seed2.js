const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MONGODB_URI =
  process.env.MONGODB_URL || "mongodb://localhost/fullstackclassroom";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};

const classroomSchema = new mongoose.Schema(
  {
    subject: {
      $type: String,
      minlength: 5,
      maxlength: 150,
      required: true,
      index: true
    },
    teacherId: {
      $type: Schema.Types.ObjectId,
      ref: "Teacher"
    },
    imagePath: { $type: String },
    roomNumber: Schema.Types.Mixed,
    studentsId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Student"
      }
    ],
    assignmentsId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Assignment"
      }
    ]
  },
  { typeKey: "$type" }
);

const Classroom = mongoose.model("Classroom", classroomSchema);

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

const Teacher = mongoose.model("Teacher", teacherSchema);

const assignmentSchema = new mongoose.Schema(
  {
    assignmentName: {
      $type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
      index: true
    },
    assignmentType: {
      $type: String,
      required: true
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      required: true
    }
  },
  { typeKey: "$type" }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

const attendanceSchema = new mongoose.Schema(
  {
    classDate: {
      $type: Date,
      index: true
    },
    isPresent: {
      $type: Boolean,
      default: false
    },
    classroomId: {
      $type: Schema.Types.ObjectId,
      ref: "Classroom"
    },
    studentId: {
      $type: Schema.Types.ObjectId,
      ref: "Student"
    }
  },
  { typeKey: "$type" }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

const studentSchema = new mongoose.Schema(
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
    classroomsId: [
      {
        $type: Schema.Types.ObjectId,
        ref: "Classroom"
      }
    ],
    attendace: [
      {
        attendanceId: {
          $type: Schema.Types.ObjectId,
          ref: "Attendace"
        },
        isCheckedIn: { $type: Boolean, default: false }
      }
    ],
    assignments: [
      {
        assignmentId: {
          $type: Schema.Types.ObjectId,
          ref: "Assignment"
        },
        grade: String,
        dateSubmitted: Date
      }
    ]
  },
  { typeKey: "$type" }
);

const Student = mongoose.model("Student", studentSchema);

const teacherSeed = [
  { firstName: "Ralph", lastName: "Fogarty", email: "rfogarty@abacus.com" },
  { firstName: "Filiberto", lastName: "Luckey", email: "fluckey@abacus.com" },
  { firstName: "Elliot", lastName: "East", email: "eeast@abacus.com" },
  { firstName: "Susann", lastName: "Alire", email: "salire@abacus.com" },
  { firstName: "Chan", lastName: "Dileo", email: "cdileo@abacus.com" },
  { firstName: "Sharlene", lastName: "Webre", email: "swebre@abacus.com" },
  { firstName: "Neoma", lastName: "Dunigan", email: "ndunigan@abacus.com" }
];

const classroomSeed = [
  {
    subject: "Grade 7 Earth Science",
    teacher: {
      firstName: "Ralph",
      lastName: "Fogarty",
      email: "rfogarty@abacus.com"
    },
    imagePath:
      "https://www.edc.org/sites/default/files/images/earth-science.jpg",
    roomNumber: "253",
    assignments: [
      {
        assignmentName: "Unit 1.1 Celery Experiment, Water Clock",
        assignmentType: "Lab"
      },
      {
        assignmentName: "Unit 1.2 Celery Experiment, Comparing Volume and Mass",
        assignmentType: "Lab"
      },
      {
        assignmentName: "Observation and Measurement",
        assignmentType: "Test"
      },
      {
        assignmentName: "Unit 8.1 Life on Another Planet",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 8.2 Planet Game",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 8.3 Star Gazing",
        assignmentType: "Activity"
      }
    ]
  },
  {
    subject: "Grade 8 English",
    teacher: {
      firstName: "Filiberto",
      lastName: "Luckey",
      email: "fluckey@abacus.com"
    },
    imagePath: "https://www.uab.edu/news/images/english_class_2018.jpg",
    roomNumber: "255",
    assignments: [
      {
        assignmentName: "Unit 4.1 Read Section I in The Elements of Style",
        assignmentType: "Reading"
      },
      {
        assignmentName: "Unit 4.2 Continue reading A Wrinkle in Time",
        assignmentType: "Reading"
      },
      {
        assignmentName: "Unit 4.3 Choose and use a vocabulary word of the week",
        assignmentType: "Activity"
      }
    ]
  },
  {
    subject: "Grade 6 Ancient Civilizations",
    teacher: {
      firstName: "Elliot",
      lastName: "East",
      email: "eeast@abacus.com"
    },
    imagePath:
      "https://img.gtvcdn.com/cdn/farfuture/iBIFwhBaWxKaI86wqi7H-loTAoL8eeAdMWyWB3t-gIY/mtime%3A1522684407/sites/default/files/imagecache/keyart_1180x664/img_16x9_landsacpe_title/152721_ancient-civilizations_16x9_0.jpg",
    roomNumber: "353",
    assignmnets: [
      {
        assignmentName: "Unit 3.1 Read Ancient Egypt",
        assignmentType: "Reading"
      },
      {
        assignmentName: "Unit 3.2 Egyptian Clocks and Games",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 4.1 Home Life in Ancient Egypt",
        assignmentType: "Reading"
      },
      {
        assignmentName: "Unit 5.1 Read The Changing Society of the Middle Ages",
        assignmentType: "Reading"
      },
      {
        assignmentName:
          "Unit 5.2 Write a letter from the perspective of Marco Polo",
        assignmentType: "Writing"
      },
      {
        assignmentName: "Unit 5.3 Medieval Entertainment",
        assignmentType: "Activity"
      }
    ]
  },
  {
    subject: "Grade 8 Algebra",
    teacher: {
      firstName: "Susann",
      lastName: "Alire",
      email: "salire@abacus.com"
    },
    imagePath:
      "https://coursehorse.imgix.net/images/course/3025/main/algebra2.jpg?auto=format%2Cenhance&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330",
    roomNumber: "153",
    assignments: [
      {
        assignmentName: "Unit 1.1 Whole Number Place Value",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 1.2 Reading and Writing Whole Numbers",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 1.3 Addition",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 2.1 Rounding Whole Number",
        assignmentType: "Activity"
      },
      {
        assignmentName: "Unit 2.2 Subtraction",
        assignmentType: "Activity"
      }
    ]
  }
];

const studentSeed = [
  { firstName: "Tanisha", lastName: "Ivery" },
  { firstName: "Rufus", lastName: "Dugger" },
  { firstName: "Kassie", lastName: "Deshaies" },
  { firstName: "Chet", lastName: "Kranzry" },
  { firstName: "Edmund", lastName: "Byram" },
  { firstName: "Eulalia", lastName: "Mcguffie" },
  { firstName: "Eulalia", lastName: "Mcguffie" },
  { firstName: "Aja", lastName: "Reichenbach" }
];

const assignmentSeed = [
  {
    assignmentName: "Unit 1.1 Whole Number Place Value",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5084"
  },
  {
    assignmentName: "Unit 1.2 Reading and Writing Whole Numbers",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5084"
  },
  {
    assignmentName: "Unit 1.3 Addition",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5084"
  },
  {
    assignmentName: "Unit 2.1 Rounding Whole Number",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5084"
  },
  {
    assignmentName: "Unit 2.2 Subtraction",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5084"
  },
  {
    assignmentName: "Unit 1 Celery Experiment ",
    assignmentType: "Lab",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 1.1 Celery Experiment, Water Clock",
    assignmentType: "Lab",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 1.2 Celery Experiment, Comparing Volume and Mass",
    assignmentType: "Lab",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Observation and Measurement",
    assignmentType: "Test",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 8.1 Life on Another Planet",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 8.2 Planet Game",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 8.3 Star Gazing",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5081"
  },
  {
    assignmentName: "Unit 4.1 Read Section I in The Elements of Style",
    assignmentType: "Reading",
    classroomId: "5c36be5e2949816ca23b5082"
  },
  {
    assignmentName: "Unit 4.2 Continue reading A Wrinkle in Time",
    assignmentType: "Reading",
    classroomId: "5c36be5e2949816ca23b5082"
  },
  {
    assignmentName: "Unit 4.3 Choose and use a vocabulary word of the week",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5082"
  },
  {
    assignmentName: "Unit 3.1 Read Ancient Egypt",
    assignmentType: "Reading",
    classroomId: "5c36be5e2949816ca23b5083"
  },
  {
    assignmentName: "Unit 3.2 Egyptian Clocks and Games",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5083"
  },
  {
    assignmentName: "Unit 4.1 Home Life in Ancient Egypt",
    assignmentType: "Reading",
    classroomId: "5c36be5e2949816ca23b5083"
  },
  {
    assignmentName: "Unit 5.1 Read The Changing Society of the Middle Ages",
    assignmentType: "Reading",
    classroomId: "5c36be5e2949816ca23b5083"
  },
  {
    assignmentName:
      "Unit 5.2 Write a letter from the perspective of Marco Polo",
    assignmentType: "Writing",
    classroomId: "5c36be5e2949816ca23b5083"
  },
  {
    assignmentName: "Unit 5.3 Medieval Entertainment",
    assignmentType: "Activity",
    classroomId: "5c36be5e2949816ca23b5083"
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

  await Classroom.deleteMany({});
  await Teacher.deleteMany({});
  await Student.deleteMany({});
  await Assignment.deleteMany({});
  await Attendance.deleteMany({});

  for (let classroom of classroomSeed) {
    const { _id: classroomId } = await new Classroom({
      subject: classroom.subject,
      teacher: classroom.teacher,
      imagePath: classroom.imagePath,
      roomNumber: classroom.room
    }).save();

    const assignments = classroom.assignments.map(assignment => ({
      ...assignment,
      classroomId
    }));

    const { insertedIds: insertedAssignmentsId } = await Assignment.insertMany(
      assignments
    );

    Classroom.findById(classroomId, function(err, classroom) {
      classroom.assignmentsId.concat(insertedAssignmentsId);
      console.log(classroom.assignmentsId);
    });
  }

  mongoose.disconnect();

  console.info("Assignment Seed: Done!");
}

seed();
