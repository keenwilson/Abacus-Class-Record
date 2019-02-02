import React, { Component } from "react";
import AttendanceOverview from "./attendanceOverview";

const modal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)"
};
const modalMain = {
  position: "fixed",
  background: "white",
  width: "80%",
  height: "auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

class ModalAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      classroomId: props.classroomId,
      classDate: props.classDate,
      attendanceList: props.attendanceList
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose();
  }
  render() {
    return (
      <React.Fragment>
        <div style={modal}>
          <section style={modalMain} className="modal-main">
            <div style={modal} className="modal">
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
                    show={this.state.show}
                    attendanceList={this.state.attendanceList}
                    classroomId={this.state.classroomId}
                    classDate={this.state.classDate}
                  />
                )}
              </div>
              <div className="modal-footer">
                <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Okay
                </a>
              </div>
            </div>

            <button onClick={this.handleClose}>close</button>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalAttendance;
