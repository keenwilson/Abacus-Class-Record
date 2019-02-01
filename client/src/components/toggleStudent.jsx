import React, { Component } from "react";

class ToggleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceId: props.attendanceId,
      isPresent: props.isPresent
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
        attendanceId: this.state.attendanceId,
        isPresent: this.state.isPresent
      };
      this.props.onChange(attendanceData);
    }, 300);
  }

  render() {
    return (
      <div className="switch">
        <label>
          <input type="checkbox"/>
          <span className="lever"></span>
        </label>
      </div>
    );
  }
}

export default ToggleStudent;
