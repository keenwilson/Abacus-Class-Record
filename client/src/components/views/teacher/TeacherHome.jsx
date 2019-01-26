import React from "react";

const TeacherHome = props => {
  const teacher = props.teacher;
  const students = props.students;
  const classroom = props.classroom;
  return (
    <React.Fragment>
      <h1>This is teacher container's homepage</h1>
      <p>Display Information of selected classroom here</p>
      <p>Subject: {classroom.subject}</p>
      <p>Room: {classroom.roomNumber}</p>
      <img
        src={classroom.imagePath}
        alt={classroom.subject}
        width="200"
        height="150"
      />
      <p>
        Teacher: {teacher.firstName} {teacher.lastName} {teacher.email}
      </p>
      <p>Students in class</p>
      <ul>
        {students.map((student, i) => (
          <li key={i} value={student._id}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TeacherHome;
