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
          <div className="card-content">
            <div className="card-title">
              <p>Attendance Overview</p>
              <p>Class stats in the last three days.</p>
            </div>
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
                  <td className="center-align">
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
                  <td className="center-align">
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
                  <td className="center-align">
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
      </div>
    );
  }
}

export default AttendanceOverview;
