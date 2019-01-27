import React, { Component } from "react";

class Toggle extends Component {
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
      <button onClick={this.handleClick}>
        {this.state.isPresent ? "Already checked in" : "Check in"}
      </button>
    );
  }
}

export default Toggle;
