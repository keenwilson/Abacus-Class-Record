import React, { Component } from "react";
import SelectClassroom from "./selectClassroom";

class AssignmentCard extends Component {
  constructor(props) {
    super(props);
    console.log("assignment card props", props);
    this.state = {
      students: props.students,
      classroom: props.classroom,
      assignments: props.assignments,
      isSelect: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isSelect: !prevState.isSelect
    }));
    const clickedClassroomId = this.state.classroom._id;
    this.props.onChange(clickedClassroomId);
  }

  routeHandler() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const { assignments, students } = this.state;

    return (
      <div className="col s12 m3">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Subject: {this.state.classroom.subject}</span>
              <p>
                <strong>Room:</strong> {this.state.classroom.roomNumber}
              </p>

              <hr />
              <p>
                <strong>Assignments</strong>
              </p>
              <ul>
                {assignments.map((assignments, i) => (
                  <li key={i} value={assignments._id}>
                    {assignments.assignmentName}
                    {assignments.assignmentType}
                    {assignments.assignmentDesc} 
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-action">
              <button
                key={this.state.classroom._id + "_" + this.state.isSelect}
                onClick={this.handleClick}
                className="browser-default"
              >
                {this.state.isSelect
                  ? "Close Actions"
                  : "Select actions for this class"}
              </button>
              {this.state.isSelect && <SelectClassroom />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentCard;
