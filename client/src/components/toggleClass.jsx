import React, { Component } from "react";
import API from "../utils/API";

class ToggleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: props.classroomId,
      classDate: props.classDate,
      attendanceList: props.attendanceList
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.toggleClassAttendance = this.toggleClassAttendance.bind(this);
  }

  handleClick() {
    console.log("current state when click", this.state);
    this.setState(prevState => ({
      isPresent: !prevState.isPresent
    }));
  }

  toggleClassAttendance() {
    const classroomId = this.state.classroomId;
    const classDate = this.state.classDate;
    if (this.state.isPresent === true) {
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

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isPresent
          ? "The whole class is checked in"
          : "Check in all students"}
      </button>
    );
  }
}

export default ToggleClass;
