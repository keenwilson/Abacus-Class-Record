import React, { Component } from "react";
import { List, ListItem } from "../components/common/List";
import API from "../utils/API";

const classroomId = "5c3e17349f45a214e516a543";

class Attendance extends Component {
  state = {
    classroom: {},
    attendances: [],
    classroomId: "5c3e17349f45a214e516a543",
    classDate: ""
  };

  componentDidMount() {
    this.handleViewClassroom(this.state.classroomId);
  }

  handleViewClassroom = classroomId => {
    API.viewClassroom(classroomId)
      .then(res => {
        this.setState({
          classroom: res.data
        });
      })
      .catch(err => console.log(err));
  };

  loadAttendances = (classroomId, classDate) => {
    API.getAttendances(classroomId, classDate)
      .then(res =>
        this.setState({
          attendances: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleAllCheckIn = (classroomId, classDate) => {
    API.updateAttendancesCheckIn(classroomId, classDate)
      .then(res => {
        this.loadAttendances(classroomId, classDate);
      })
      .catch(err => console.log(err));
  };

  handleAllCheckOut = (classroomId, classDate) => {
    API.updateAttendancesCheckOut(classroomId, classDate)
      .then(res => {
        this.setState({
          attendances: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleToggleStudent = attendanceId => {
    API.updateAttendanceToggle(attendanceId)
      .then(res => {
        this.setState({
          attendances: res.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Attendance for {}</h1>
        </div>
      </div>
    );
  }
}

export default Attendance;
