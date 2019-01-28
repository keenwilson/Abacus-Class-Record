import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SelectClassroom from "./selectClassroom";

class ClassroomsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: props.teacher,
      students: props.students,
      classroom: props.classroom,
      isSelect: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isSelect: !prevState.isSelect
    }));
    const clickedClassroomId = this.state.classroom._id;
    console.log("card handleClick", clickedClassroomId);
    this.props.onChange(clickedClassroomId);
  }

  routeHandler() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const { classroom, teacher, students } = this.state;
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
              <button
                key={this.state.classroom._id + "_" + this.state.isSelect}
                onClick={this.handleClick}
                className="browser-default"
              >
                {this.state.isSelect
                  ? "Close Actions"
                  : "Select actions for this class"}
              </button>
              {this.state.isSelect && <SelectClassroom />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassroomsCard;
