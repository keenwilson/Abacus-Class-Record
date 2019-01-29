import React, { Component } from "react";
import ClassroomsCard from "../../classroomCard";

class TeacherHome extends Component {
  constructor(props) {
    const css = require('./assets/css/navbar.css').toString();

    super(props);
    this.state = {
      classrooms: props.classrooms
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getStudentsInfo() {
    const currentClassroom = this.state.currentClassroom;
    this.setState({
      students: currentClassroom.studentsId
    });
  }

  handleChange(classroomId) {
    this.props.onChange(classroomId);
  }

  render() {
    return (
      <React.Fragment>
        <style>${this.css}</style>
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
                onChange={this.handleChange}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherHome;
