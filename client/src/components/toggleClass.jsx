import React, { Component } from "react";

class ToggleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: props.classroomId,
      classDate: props.classDate,
      attendanceList: props.attendanceList,
      classIsPresent: props.classIsPresent
    };

    // This binding is necessary to make `this` work in the callback
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  handleCheckIn() {
    this.props.onClick(true);
  }

  handleCheckOut() {
    this.props.onClick(false);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.classIsPresent && (
          <button onClick={this.handleCheckOut}>
            The whole class is checked in
          </button>
        )}
        {!this.props.classIsPresent && (
          <button onClick={this.handleCheckIn}>Check in the whole class</button>
        )}
      </React.Fragment>
    );
  }
}

export default ToggleClass;
