import React, { Component } from "react";
import ClassroomsCard from "../../classroomCard";
import "./assets/css/home.css";

class TeacherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classrooms: props.classrooms,
      classroom: props.classroom,
      currentTeacher: props.currentTeacher,
      students: props.students
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // getStudentsInfo() {
  //   const currentClassroom = this.state.classroom;
  //   this.setState({
  //     students: currentClassroom.studentsId
  //   });
  // }

  // getTeacherInfo() {
  //   const currentClassroom = this.state.classroom;
  //   this.setState({
  //     teacher: currentClassroom.teacherId
  //   });
  // }
  handleChange(classroomId) {
    this.props.onChange(classroomId);
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
