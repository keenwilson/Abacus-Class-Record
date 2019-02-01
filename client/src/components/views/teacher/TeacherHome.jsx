import React, { Component } from "react";
import ClassroomsCard from "../../classroomCard";

class TeacherHome extends Component {
  constructor(props) {
    const css = require('./assets/css/home.css').toString();

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
        <style>${this.css}</style>
        <div className="abacus-container">
          {/* Loop through available classes, output cards */}
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
          {/* // END // */}

          {/* Add Class */}
          <div className="abacus-flex-card card add-class">
            <a className="modal-trigger" href="#add-class-modal">
              <div className="card-content">
                <h3>Add Class</h3>
                <i className="fa fa-plus"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Modal */}
        <div id="add-class-modal" className="modal">
          <div className="modal-content">
            <h4>Add a class</h4>
            <p>Feature coming soon...</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Okay, i'll come back later.</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherHome;
