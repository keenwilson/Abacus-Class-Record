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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      isEditted: true
    });
  }
  handleChange(e) {
    const gradeInput = e.target.value;
    this.setState({
      currentGrade: gradeInput
    });
  }

  handleSubmit() {
    const gradeId = this.state.gradeObject._id;
    const gradeInput = {
      gradeInput: this.state.currentGrade
    };
    API.updateGrade(gradeId, gradeInput);
    this.setState({
      isEditted: false
    });
  }
  render() {
    return (
      <tr>
        <td>{this.state.studentName}</td>

        {!this.state.isEditted && (
          <td onClick={this.handleClick}>{this.state.currentGrade}</td>
        )}
        {this.state.isEditted && (
          <td>
            <div className="input-field inline">
              <input
                id="grade_inline"
                type="text"
                className="validate"
                value={this.state.currentGrade}
                onChange={this.handleChange}
              />
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </td>
        )}
      </tr>
    );
  }
}

export default GradeStudentRow;
