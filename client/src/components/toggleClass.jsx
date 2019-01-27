import React, { Component } from "react";

class ToggleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomId: props.classroomId,
      classDate: props.classDate,
      isPresent: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isPresent: !prevState.isPresent
    }));
    setTimeout(() => {
      const attendanceData = {
        classroomId: this.state.classroomId,
        classDate: this.state.classDate,
        isPresent: this.state.isPresent
      };
      this.props.onChange(attendanceData);
    }, 300);
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
