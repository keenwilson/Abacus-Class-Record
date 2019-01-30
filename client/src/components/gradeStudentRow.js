import React, { Component } from "react";
import API from "../utils/API";

class GradeStudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: props.studentName,
      currentGrade: props.currentGrade,
      assignmentName: props.assignmentName,
      classroomName: props.classroomName,
      isEditted: false,
      gradeObject: props.gradeObject
    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.studentName}</td>

        <td>{this.state.currentGrade}</td>
      </tr>
    );
  }
}

export default GradeStudentRow;
