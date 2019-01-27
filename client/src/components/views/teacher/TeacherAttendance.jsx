import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import API from "../../../utils/API";
import "react-datepicker/dist/react-datepicker.css";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAttendaceData = this.getAttendaceData.bind(this);
  }

  componentDidMount() {
    console.log("Attendance did mount state:", this.state);
  }

  componentDidUpdate() {
    console.log("Attendance did update state:", this.state);
  }

  async getAttendaceData() {
    const classroomId = this.state.classroomId;
    const classDate = this.state.classDate;
    console.log(
      `Get attendance date with classroom id: ${classroomId} and classDate: ${classDate}`
    );
    await API.getAttendances(classroomId, classDate)
      .then(res => {
        console.log(res);
        this.setState({ attendanceList: res.data }, () => {
          console.log(this.state.attendanceList);
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(date) {
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
      this.getAttendaceData();
    }
  }

  render() {
    return (
      <div>
        <h1>Attendance Window</h1>
        {this.state.classroom && <h1>{this.state.classroom.subject}</h1>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Date: </label>
            <DatePicker
              onChange={this.handleChange}
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
      </div>
    );
  }
}

export default TeacherAttendance;
