import React, { Component } from "react";
import GradesCard from "../../gradesCard";
import API from "../../../utils/API";

class TeacherGrades extends Component {
  constructor(props) {
    const css = require("./assets/css/grades.css").toString();

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
    return (
      <div>
        <style>${this.css}</style>
        {this.state.assignments && (
          <div>
            <p>
              Show Grades of Each Assignemnt in {this.state.classroom.subject}
            </p>
            <div className="row">
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
        )}
      </div>
    );
  }
}

export default TeacherGrades;
