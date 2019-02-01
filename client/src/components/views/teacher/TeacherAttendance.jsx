import React, { Component } from "react";
import moment from "moment";
import AttendanceList from "../../attendanceList";
import DatePicker from "../../datePicker";
import AttendanceOverview from "../../attendanceOverview";

class TeacherAttendance extends Component {
  constructor(props) {
    const css = require("./assets/css/attendance.css").toString();

    super(props);

    this.state = {
      classroom: props.classroom,
      classroomId: props.classroom._id,
      classDate: moment().format("YYYY-MM-DD"),
      attendanceList: [],
      showOverview: false,
      studentsCount: 0
    };

    this.updateClassDate = this.updateClassDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    if (this.state.showOverview !== nextState.showOverview) {
      console.log("shouldComponentUpdate: showOverview is changed");
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

  handleClick() {
    this.setState(
      prevState => ({
        showOverview: !prevState.showOverview
      }),
      console.log(this.state.showOverview)
    );
  }

  updateCurrentClass(updatedAttendanceList) {
    this.setState(
      {
        attendanceList: updatedAttendanceList
      },
      console.log(this.state.attendanceList)
    );
  }
  render() {
    // const studentsAttendance = this.state.attendanceList;
    return (
        <div>
          <style>${this.css}</style>

          {/* Attendance Overview button and modal */}
          <div className="row row-overview">
            <a href="#modal-class-overview" class="modal-trigger">
              <button
                  className="waves-effect waves-light btn"
                  key={
                    this.state.classroomId +
                    "_" +
                    this.state.classDate +
                    "_" +
                    this.state.showOverview
                  }
                  onClick={this.handleClick}
              >
                {this.state.showOverview
                    ? "Close Attendance Overview"
                    : "Show Attendance Overview"}
              </button>
            </a>

            {/* Modal */}
            <div id="modal-class-overview" className="modal">
              <div className="modal-content">
                <h4>Classroom Overview</h4>
                {this.state.showOverview && (
                    <AttendanceOverview
                        key={
                          this.state.classroomId +
                          "_" +
                          this.state.showOverview +
                          "_" +
                          this.state.classDate
                        }
                        showOverview={this.state.showOverview}
                        attendanceList={this.state.attendanceList}
                        classroomId={this.state.classroomId}
                        classDate={this.state.classDate}
                    />
                )}
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Okay</a>
              </div>
            </div>
          </div>
          {/* // END // */}

          {/* Attendance Cards */}
          <div className="abacus-container">
            {this.state.classroom && (
              <div className="abacus-flex-card card">
                <div className="card-content">
                  <div className="card-title">
                    <h3>
                      Class: {this.state.classroom.subject}<br/>
                      Date: {this.state.classDate}
                    </h3>
                  </div>
                  <DatePicker onChange={this.updateClassDate} />
                  <AttendanceList
                      key={this.state.classroomId + "_" + this.state.classDate}
                      classroomId={this.state.classroomId}
                      classDate={this.state.classDate}
                      onClassUpdate={this.updateCurrentClass}
                      refresh={this.refreshClassDate}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default TeacherAttendance;
