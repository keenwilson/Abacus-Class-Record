import React, { Component } from "react";
import ClassroomsCard from "../../classroomCard";
import "./assets/css/home.css";

class TeacherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classrooms: props.classrooms
    };
  }

  getStudentsInfo() {
    const currentClassroom = this.state.currentClassroom;
    this.setState({
      students: currentClassroom.studentsId
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="abacus-container">
          <div className="row">
            {this.props.classrooms.map((classroom, i) => (
              <ClassroomsCard
                key={classroom._id}
                name={classroom.subject}
                value={classroom._id}
                classroom={classroom}
                teacher={classroom.teacherId}
                students={classroom.studentsId}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherHome;
