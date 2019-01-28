import React, { Component } from "react";
import { Link } from "react-router-dom";
class SelectClassroom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>
          <Link to="/teacher/attendance">Check Attendance</Link>
        </li>
        <li>
          <Link to="/teacher/assignments">Check Assignments</Link>
        </li>
        <li>
          <Link to="/teacher/grades">Check Grades</Link>
        </li>
      </ul>
    );
  }
}

export default SelectClassroom;
