import React, { Component } from "react";
import moment from "moment";
import AttendanceList from "../../attendanceList";
import DatePicker from "../../datePicker";

class TeacherAttendance extends Component {
  constructor(props) {
    super(props);
    console.log("attendance is loaded");
    this.state = {
      classroom: props.classroom,
      classroomId: props.classroom._id,
      classDate: moment().format("YYYY-MM-DD"),
      attendanceList: []
    };

    this.updateClassDate = this.updateClassDate.bind(this);
  }

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      console.log("teacherAttendance refresh");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.classDate !== nextState.classDate) {
      console.log("shouldComponentUpdate: classDate is changed");
      return true;
    }
    if (this.props.classroom !== nextProps.classroom) {
      return true;
    }
    return false;
  }

  updateClassDate(date) {
    this.setState({
      classDate: date
    });
    console.log("update class to, ", date);
    this.refreshClassDate();
  }

  refreshClassDate() {
    console.log("refresh class date");
    this.setState({ refreshClassDate: !this.state.refreshClassDate });
  }

  render() {
    // const studentsAttendance = this.state.attendanceList;
    return (
      <div>
        {this.state.classroom && (
          <div>
            <p>
              Attendance of {this.state.classroom.subject} on
              {this.state.classDate}
            </p>
            <DatePicker onChange={this.updateClassDate} />
            <AttendanceList
              key={this.state.classroomId + "_" + this.state.classDate}
              classroomId={this.state.classroomId}
              classDate={this.state.classDate}
              attendanceList={this.state.attendanceList}
              refresh={this.refreshClassDate}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TeacherAttendance;
