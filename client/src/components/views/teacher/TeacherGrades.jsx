import React, { Component } from "react";

class TeacherGrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroom: props.classroom,
      teacher: props.teacher,
      students: props.students,
      grades: []
    };
  }

  render() {
    return (
      <div>
        {this.state.classroom && (
          <div>
            <p>Grades of {this.state.classroom.subject}</p>
            <p>
              Teacher: {this.state.teacher.name} {this.state.teacher.email}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default TeacherGrades;
