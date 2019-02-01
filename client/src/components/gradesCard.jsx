import React, { Component } from "react";
import API from "../utils/API";
import GradeStudentRow from "./gradeStudentRow";

class GradesCard extends Component {
  constructor(props) {
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
      <div className="col s12 m3">
        <div className="card-wrapper">
          <div className="card">
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
      </div>
    );
  }
}

export default GradesCard;
