import React, { Component } from "react";

class TeacherAssignments extends Component {
  constructor(props) {
    const css = require('./assets/css/assignments.css').toString();

    super(props);
    this.state = {
      classroom: props.classroom,
      teacher: props.teacher,
      students: props.students,
      assignments: []
    };
  }
  render() {
    return (
      <div>
        <style>${this.css}</style>
        {this.state.classroom && (
          <div>
            <p>Assignments of {this.state.classroom.subject}</p>
            <p>
              Teacher: {this.state.teacher.name} {this.state.teacher.email}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default TeacherAssignments;
