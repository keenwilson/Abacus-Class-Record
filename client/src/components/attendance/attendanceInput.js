import React, { Component } from "react";
import API from "../../utils/API";

class AttendanceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: "",
      classDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getClassroomId() {
    this.setState({
      classroomId: props.classroom._id
    });
    console.log("Attendance received classroomId", this.state.classroomId);
  }
  setClassDate(classDate) {
    this.setState({ classDate: classDate });
  }

  async createAttendance() {
    const attendanceData = {
      classroomId: this.state.classroomId,
      classDate: this.state.classDate
    };
    API.createAttendances(attendanceData)
      .then(res => {
        console.log("create attendance", res.data);
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setClassDate(e.target.value);
  }

  handleClick(e) {
    this.createAttendance();
  }

  render() {
    return (
      <div>
        <p>Add Class Date in format YYYY-MM-DD</p>
        <input value={this.state.classDate} onChange={this.handleChange} />
        <p>Class date on state {this.state.classDate}</p>
        <button onClick={this.handleClick}>
          Create Attendance fo this class!
        </button>
      </div>
    );
  }
}

export default AttendanceInput;
