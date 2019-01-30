import React, { Component } from "react";
import API from "../../../utils/API";
import AssignmentCard from "../../assignmentCard";

class TeacherAssignments extends Component {
  constructor(props) {
    const css = require("./assets/css/assignments.css").toString();

    super(props);
    console.log("assignments", props);
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
        this.setState(
          {
            assignments: res.data
          },
          () => {
            console.log(
              "Get assignments data and update state:",
              this.state.assignments
            );
          }
        );
      })
      .catch(err => console.log(err));
  }

  handleClick(assignmentId) {
    console.log("Assignment with this id is clicked:", assignmentId);
  }

  render() {
    return (
      <React.Fragment>
        <style>${this.css}</style>

        <div className="abacus-container">
          <div className="row">{this.state.classroom.subject}</div>
          <div className="row">
            {this.state.assignments &&
              this.state.assignments.map((item, i) => (
                <AssignmentCard
                  key={item._id}
                  assignmentId={item._id}
                  name={item.assignmentName}
                  assignmentType={item.assignmentType}
                  description={item.assignmentDesc}
                  maxScore={item.maxScore}
                  dueDate={item.dueDate}
                  value={item._id}
                  onClick={this.handleClick}
                />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherAssignments;
