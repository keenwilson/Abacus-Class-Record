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
    ],
    assignments: [
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
    grade: {
      $type: String
    },
    score: {
      $type: Number
    },
    classroomId: [Schema.Types.ObjectId]
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
    imagePath:
      "https://www.edc.org/sites/default/files/images/earth-science.jpg",
    roomNumber: "253"
  },
  {
    subject: "Grade 8 English",
    imagePath: "https://www.uab.edu/news/images/english_class_2018.jpg",
    roomNumber: "255"
  },
  {
    subject: "Grade 6 Ancient Civilizations",
    imagePath:
      "https://img.gtvcdn.com/cdn/farfuture/iBIFwhBaWxKaI86wqi7H-loTAoL8eeAdMWyWB3t-gIY/mtime%3A1522684407/sites/default/files/imagecache/keyart_1180x664/img_16x9_landsacpe_title/152721_ancient-civilizations_16x9_0.jpg",
    roomNumber: "353"
  },
  {
    subject: "Grade 8 Algebra",
    imagePath:
      "https://coursehorse.imgix.net/images/course/3025/main/algebra2.jpg?auto=format%2Cenhance&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330",
    roomNumber: "153"
  },
  {
    subject: "Grade 7 Math",
    imagePath:
      "https://www.science.edu/acellus/wp-content/uploads/2016/12/Grade-7-Math-712x388-712x388.jpg",
    roomNumber: "353"
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

  for (let teacher of teacherSeed) {
    const { _id: teacherId } = await new Teacher({
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.email
    }).save();
  }

  for (let classroom of classroomSeed) {
    const { _id: classroomId } = await new Classroom({
      subject: classroom.subject,
      imagePath: classroom.imagePath,
      roomNumber: classroom.room
    }).save();
  }

  for (let student of studentSeed) {
    const { _id: studentId } = await new Student({
      firstName: student.firstName,
      lastName: student.lastName
    }).save();
  }

  for (let assignment of assignmentSeed) {
    const classroomId = assignment.classroomId;
    const { _id: assignmentId } = await new Assignment({
      assignmentName: assignment.assignmentName,
      assignmentType: assignment.assignmentType,
      classroomId
    }).save();

    Classroom.findById(classroomId, function(err, classroom) {
      classroom.assignmentsId.push(assignmentId);
      console.log(classroom);
    });
  }
  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();
