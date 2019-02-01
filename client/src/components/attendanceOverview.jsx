import React, { Component } from "react";
import moment from "moment";
import CountStudents from "./countStudents";
import ListMissingStudents from "./listMissingStudents";
import API from "../utils/API";

class AttendanceOverview extends Component {
  constructor(props) {
    super(props);
    console.log("AttendanceOverview Props", props);
    this.state = {
      attendanceList: props.attendanceList,
      showOverview: props.showOverview,
      classroomId: props.classroomId,
      classDate: props.classDate,
      previousDay: "",
      attendanceListpreviousDay: [],
      previousTwoDays: "",
      attendanceListpreviousTwoDays: [],
      previousThreeDays: "",
      attendanceListpreviousThreeDays: []
    };
    this.getAttendancePreviousDay = this.getAttendancePreviousDay.bind(this);
    this.getAttendancePreviousTwoDays = this.getAttendancePreviousTwoDays.bind(
      this
    );
    this.getAttendancePreviousThreeDays = this.getAttendancePreviousThreeDays.bind(
      this
    );
  }

  componentDidMount() {
    try {
      this.getAttendancePreviousDay();
      this.getAttendancePreviousTwoDays();
      this.getAttendancePreviousThreeDays();
    } catch (error) {}
  }
  async getAttendancePreviousDay() {
    const previousDay = moment(this.state.classDate, "YYYY-MM-DD")
      .subtract(1, "days")
      .format("YYYY-MM-DD");

    const classroomId = this.state.classroomId;

    await API.getAttendances(classroomId, previousDay)
      .then(res => {
        console.log(res.data);
        this.setState({
          attendanceListpreviousDay: res.data,
          previousDay: previousDay
        });
      })
      .catch(err => console.log(err));
  }
  async getAttendancePreviousTwoDays() {
    const previousTwoDays = moment(this.state.classDate, "YYYY-MM-DD")
      .subtract(2, "days")
      .format("YYYY-MM-DD");
    const classroomId = this.state.classroomId;
    await API.getAttendances(classroomId, previousTwoDays)
      .then(res => {
        this.setState({
          attendanceListpreviousTwoDays: res.data,
          previousTwoDays: previousTwoDays
        });
      })
      .catch(err => console.log(err));
  }
  async getAttendancePreviousThreeDays() {
    const previousThreeDays = moment(this.state.classDate, "YYYY-MM-DD")
      .subtract(3, "days")
      .format("YYYY-MM-DD");
    const classroomId = this.state.classroomId;
    await API.getAttendances(classroomId, previousThreeDays)
      .then(res => {
        console.log(res.data);
        this.setState({
          attendanceListpreviousThreeDays: res.data,
          previousThreeDays: previousThreeDays
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.showOverview && (
          <div>
            <p>Attendance Overview</p>
            <p>Class stats in the last three days.</p>
            <table>
              <thead>
                <tr>
                  <td>Class Date</td>
                  <td># of Students Checked In</td>
                  <td>Absences</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.previousDay}</td>
                  <td>
                    <CountStudents
                      attendanceList={this.state.attendanceListpreviousDay}
                    />
                  </td>
                  <td>
                    <ListMissingStudents
                      attendanceList={this.state.attendanceListpreviousDay}
                    />
                  </td>
                </tr>
                <tr>
                  <td>{this.state.previousTwoDays}</td>
                  <td>
                    <CountStudents
                      attendanceList={this.state.attendanceListpreviousTwoDays}
                    />
                  </td>
                  <td>
                    <ListMissingStudents
                      attendanceList={this.state.attendanceListpreviousTwoDays}
                    />
                  </td>
                </tr>
                <tr>
                  <td>{this.state.previousThreeDays}</td>
                  <td>
                    <CountStudents
                      attendanceList={
                        this.state.attendanceListpreviousThreeDays
                      }
                    />
                  </td>
                  <td>
                    <ListMissingStudents
                      attendanceList={
                        this.state.attendanceListpreviousThreeDays
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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
