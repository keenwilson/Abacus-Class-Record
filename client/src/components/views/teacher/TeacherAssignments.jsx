import React, { Component } from "react";
import AssignmentCard from "../../assignmentCard";
import API from "../../../utils/API";

class TeacherAssignments extends Component {
  constructor(props) {
    const css = require('./assets/css/home.css').toString();

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
        <div className="row top-bar">
          <div className="container">
            <input type="text" placeholder="Filter Assignments by Category"/>
          </div>
        </div>
        <div className="abacus-container abacus-assignments">
          {this.state.assignments &&
            this.state.assignments.map((item, i) => (
              <AssignmentCard
                key={item._id}
                assignmentId={item._id}
                assignmentName={item.assignmentName}
                assignmentType={item.assignmentType}
                assignmentDesc={item.assignmentDesc}
                maxScore={item.maxScore}
                dueDate={item.dueDate}
                value={item._id}
                onClick={this.handleClick}
              />
              ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherAssignments;
