import React, { Component } from "react";
import GradesCard from "../../gradesCard";
import API from "../../../utils/API";

class TeacherGrades extends Component {
  constructor(props) {
    const css = require("./assets/css/home.css").toString();
    const customcss = require('./assets/css/grades.css').toString();

    super(props);
    this.state = {
      classroom: props.classroom,
      assignments: []
    };
    this.getAssignmentData = this.getAssignmentData.bind(this);
  }

  componentDidMount() {
    try {
      this.getAssignmentData();
    } catch (error) {
      console.log(error);
    }
  }
  async getAssignmentData() {
    const classroomId = this.state.classroom._id;

    await API.getAssignments(classroomId)
      .then(res => {
        console.log(res.data);
        this.setState({
          assignments: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { length: count } = this.state.assignments;
    if (count === 0) return <p>There are no grades in the database.</p>;
    return (
      <div>
        <style>${this.css}</style>
        <style>${this.customcss}</style>
        <div className="row top-bar">
          <div className="container">
            <h6>Grade book for <span>{this.state.classroom.subject}</span></h6>
          </div>
        </div>
        <div className="abacus-container abacus-grades">
          {this.state.assignments &&
            this.state.assignments.map((item, i) => (
              <GradesCard
                key={item._id}
                assignment={item}
                value={item._id}
                assignmentId={item._id}
                classroomId={item.classroomId}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default TeacherGrades;
