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
      attendanceList: []
    };
    this.getAttendanceData = this.getAttendanceData.bind(this);
    this.handleAttendanceData = this.handleAttendanceData.bind(this);
  }
  componentDidMount() {
    try {
      this.getAttendanceData();
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.attendanceList !== nextState.attendanceList) {
      console.log("shouldComponentUpdate: attendanceList is changed");
      return true;
    }
    if (this.props.classroomId !== nextProps.classroomId) {
      return true;
    }
    return false;
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

  handleAttendanceData() {
    const updatedAttendanceList = this.state.attendanceList;
    this.props.onClassUpdate(updatedAttendanceList);
  }

  async changeStatus(newStatus) {
    console.log("change student checkin status:", newStatus);
    const attendanceId = newStatus.attendanceId;

    await API.updateAttendanceToggle(attendanceId).catch(err =>
      console.log(err)
    );
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
                onUpdate={this.handleAttendanceData}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AttendanceList;
