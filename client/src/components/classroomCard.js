import React from "react";
import { Link } from "react-router-dom";

const ClassroomsCard = props => {
  const teacher = props.teacher;
  const students = props.students;
  const classroom = props.classroom;
  return (
    <div className="col s12 m3">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={classroom.imagePath} alt={classroom.subject} />
          </div>
          <div className="card-content">
            <span className="card-title">Subject: {classroom.subject}</span>
            <p>
              <strong>Room:</strong> {classroom.roomNumber}
            </p>
            <p>
              <strong>Teacher:</strong> {teacher.firstName} {teacher.lastName}{" "}
              {teacher.email}
            </p>
            <hr />
            <p>
              <strong>Students:</strong>
            </p>
            <ul>
              {students.map((student, i) => (
                <li key={i} value={student._id}>
                  {student.firstName} {student.lastName}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-action">
            <Link to="/teacher/attendance">Check Attendance</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomsCard;
