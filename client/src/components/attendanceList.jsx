import React, { Component } from "react";
import ToggleStudent from "./toggleStudent";
import ToggleClass from "./toggleClass";
import API from "../utils/API";

class AttendanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: props.classroomId,
      classDate: props.classDate,
      attendanceList: props.attendanceList,
      totalMissing: 0
    };
    this.getAttendanceData = this.getAttendanceData.bind(this);
    this.countAttendance = this.countAttendance.bind(this);
  }
  componentDidMount() {
    try {
      this.getAttendanceData();
    } catch (error) {
      console.log(error);
    }
  }

  async getAttendanceData() {
    const classroomId = this.state.classroomId;
    const classDate = this.state.classDate;
    await API.getAttendances(classroomId, classDate)
      .then(res => {
        console.log(res.data);
        this.setState({
          attendanceList: res.data,
          classDate: classDate
        });
      })
      .catch(err => console.log(err));
  }

  async changeStatus(newStatus) {
    console.log("change student checkin status:", newStatus);
    const attendanceId = newStatus.attendanceId;

    await API.updateAttendanceToggle(attendanceId)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Class date: {this.state.classDate}</p>
        <ToggleClass
          key={this.state.classroomId + "_" + this.state.classDate}
          classroomId={this.state.classroomId}
          classDate={this.state.classDate}
          attendanceList={this.state.attendanceList}
        />
        <ul>
          {this.state.attendanceList.map((attendance, i) => (
            <li key={attendance._id + "_" + i} value={attendance._id}>
              {attendance.studentId.firstName} {attendance.studentId.lastName}{" "}
              <ToggleStudent
                key={attendance._id + "_" + i}
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

export default AttendanceList;
