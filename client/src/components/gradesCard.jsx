import React, { Component } from "react";
import GradeStudentRow from "./gradeStudentRow";
import API from "../utils/API";

class GradesCard extends Component {
  constructor(props) {
    const css = require("../components/views/teacher/assets/css/home.css").toString();
    super(props);
    this.state = {
      assignment: props.assignment,
      classroomId: props.classroomId,
      grades: []
    };
    this.getGradesData = this.getGradesData.bind(this);
  }

  componentDidMount() {
    try {
      this.getGradesData();
    } catch (error) {
      console.log(error);
    }
  }
  async getGradesData() {
    const assignmentId = this.state.assignment._id;

    await API.getGrades(assignmentId)
      .then(res => {
        console.log(res.data);
        this.setState(
          {
            grades: res.data
          },
          () => console.log(this.state.grades)
        );
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <style>${this.css}</style>
        <div className="abacus-flex-card card">
          <div className="card-content">
        <span className="card-title">
          {this.state.assignment.assignmentName}
        </span>
            <p>
              <strong>MaxScore:</strong> {this.state.assignment.maxScore}
            </p>
            <table className="striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
              </tr>
              </thead>

              <tbody>
              {this.state.grades &&
              this.state.grades.map((studentGrade, i) => (
                  <GradeStudentRow
                      key={studentGrade._id}
                      gradeObject={studentGrade}
                      studentName={
                        studentGrade.studentId.firstName +
                        " " +
                        studentGrade.studentId.lastName
                      }
                      currentGrade={studentGrade.grade}
                      assignmentName={
                        studentGrade.assignmentId.assignmentName
                      }
                      classroomName={studentGrade.classroomId.subject}
                  />
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default GradesCard;
