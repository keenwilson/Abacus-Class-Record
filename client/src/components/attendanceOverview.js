import React, { Component } from "react";

class AttendanceOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShowup: props.currentShowup
    };
  }
  render() {
    return (
      <div>
        <a href="#" data-target="overview" className="sidenav-trigger">
          <i className="fa fa-bars" />
        </a>
        <ul className="overview" id="attendance-overview">
          <li>Attendance</li>
          <li>Overview</li>
          <li>Hey!</li>
          <li>Have fun!</li>
        </ul>
      </div>
    );
  }
}

export default AttendanceOverview;
