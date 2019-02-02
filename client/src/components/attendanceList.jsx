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
      attendanceList: [],
      classIsPresent: false
    };
    this.getAttendanceData = this.getAttendanceData.bind(this);
    this.handleAttendanceData = this.handleAttendanceData.bind(this);
    this.toggleClassAttendance = this.toggleClassAttendance.bind(this);
    this.checkInWholeClass = this.checkInWholeClass.bind(this);
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
    if (this.state.classIsPresent !== nextState.classIsPresent) {
      console.log("shouldComponentUpdate: classIsPresent is changed");
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

  async toggleClassAttendance(status) {
    await this.checkInWholeClass(status);
    console.log("Whole class is clicked", status);
    const classroomId = this.state.classroomId;
    const classDate = this.state.classDate;
    if (status === true) {
      console.log("Check in every one on class date:", classDate);
      API.updateAttendancesCheckIn(classroomId, classDate)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    } else {
      console.log("Check out every one on class date:", classDate);
      API.updateAttendancesCheckOut(classroomId, classDate)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }

  checkInWholeClass(status) {
    console.log("state class is checked in", status);
    this.setState({
      classIsPresent: status
    });
  }

  render() {
    return (
      <div className="">
        <h6>Class date: {this.state.classDate}</h6>

        {/* Toggle Entire Class Button */}
        <div className="card-toggle-class-button">
          <ToggleClass
            key={
              this.state.classroomId +
              "_" +
              this.state.classDate +
              "_" +
              this.state.classIsPresent
            }
            classroomId={this.state.classroomId}
            classDate={this.state.classDate}
            attendanceList={this.state.attendanceList}
            onClick={this.toggleClassAttendance}
            classIsPresent={this.state.classIsPresent}
          />
        </div>

        {/* Class List*/}
        <div className="card-toggle-student-section">
          <ul>
            {this.state.attendanceList.map((attendance, i) => (
              <li key={attendance._id + "_" + i} value={attendance._id}>
                <div className="student-row">
                  <div className="student-name">
                    {attendance.studentId.firstName}{" "}
                    {attendance.studentId.lastName}
                  </div>
                  <div className="student-toggle">
                    <ToggleStudent
                      key={
                        attendance._id +
                        "_" +
                        i +
                        "_" +
                        this.state.classIsPresent +
                        "_" +
                        attendance.isPresent
                      }
                      attendanceId={attendance._id}
                      classIsPresent={this.state.classIsPresent}
                      isPresent={attendance.isPresent}
                      onChange={this.changeStatus}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AttendanceList;
