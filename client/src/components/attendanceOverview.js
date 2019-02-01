import React, { Component } from "react";
import CountStudents from "./countStudents";

class AttendanceOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceList: props.attendanceList,
      showOverview: props.showOverview,
      classroomId: props.classroomId,
      classDate: props.classDate
    };
  }

  render() {
    return (
      <div>
        {this.state.showOverview && <p>Ba babab</p>}
        <ul className="overview" id="attendance-overview">
          <li>Attendance</li>
          <li>Overview</li>
          <li>Hey!</li>
          <li>Have fun!</li>
          <li>
            There are{" "}
            <CountStudents
              key={
                this.state.classroomId +
                "_" +
                this.state.classDate +
                "_" +
                this.state.showOverview
              }
              attendanceList={this.state.attendanceList}
            />{" "}
            students checked in.
          </li>
        </ul>
      </div>
    );
  }
}

export default AttendanceOverview;
