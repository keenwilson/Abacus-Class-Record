import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import API from "../../../utils/API";
import "react-datepicker/dist/react-datepicker.css";

import ToggleStudent from "../../toggleStudent";
import ToggleClass from "../../toggleClass";

class TeacherAttendance extends Component {
  constructor(props) {
    super(props);
    console.log("Attendance props:", props);
    console.log("Attendance props classroom:", props.classroom);
    this.state = {
      classroom: props.classroom,
      classroomId: props.classroom._id,
      classDate: moment().format("YYYY-MM-DD"),
      attendanceList: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAttendanceData = this.getAttendanceData.bind(this);
  }

  componentDidMount() {
    console.log("Attendance did mount state:", this.state);
  }

  componentDidUpdate() {
    console.log("Attendance did update state:", this.state);
  }

  async getAttendanceData() {
    const classroomId = this.state.classroomId;
    const classDate = this.state.classDate;
    console.log(
      `Get attendance date with classroom id: ${classroomId} and classDate: ${classDate}`
    );
    await API.getAttendances(classroomId, classDate)
      .then(res => {
        this.setState(
          { attendanceList: res.data, classDate: classDate },
          () => {
            console.log(this.state.attendanceList);
          }
        );
      })
      .catch(err => console.log(err));
  }

  handleDateChange(date) {
    console.log("date picker input:", date);
    let dateTime = new Date(date);
    dateTime = moment(dateTime).format("YYYY-MM-DD");
    console.log("moment change picker input:", dateTime);
    this.setState({
      classDate: dateTime
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.classDate && this.state.classroomId) {
      console.log(
        `Get attendance date with classroom id: ${
          this.state.classroomId
        } and classDate: ${this.state.classDate}`
      );
      this.getAttendanceData();
    }
  }

  async changeStatus(newStatus) {
    console.log("student status:", newStatus);
    const attendanceId = newStatus.attendanceId;

    await API.updateAttendanceToggle(attendanceId)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  async changeClassStatus(newStatus) {
    console.log("classroom status:", newStatus);
    const classroomId = newStatus.classroomId;
    const classDate = newStatus.classDate;
    if (newStatus.isPresent === true) {
      API.updateAttendancesCheckIn(classroomId, classDate)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    } else {
      API.updateAttendancesCheckOut(classroomId, classDate)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    // const studentsAttendance = this.state.attendanceList;
    return (
      <div>
        <h1>Attendance Window</h1>
        {this.state.classroom && <h1>{this.state.classroom.subject}</h1>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Date: </label>
            <DatePicker
              onChange={this.handleDateChange}
              name="classDate"
              dateFormat="MM/DD/YYYY"
              value={this.state.classDate !== "" ? this.state.classDate : null}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">
              Get attendance list on this date
            </button>
          </div>
        </form>
        <h1>Class date: {this.state.classDate}</h1>

        <ToggleClass
          classroomId={this.state.classroomId}
          classDate={this.state.classDate}
          onChange={this.changeClassStatus}
        />

        <ul>
          {this.state.attendanceList.map((attendance, i) => (
            <li key={attendance._id + "_" + i} value={attendance._id}>
              {attendance.studentId.firstName} {attendance.studentId.lastName}{" "}
              <ToggleStudent
                attendanceId={attendance._id}
                isPresent={attendance.isPresent}
                onChange={this.changeStatus}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TeacherAttendance;
