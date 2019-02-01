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
      <div>
        {this.state.isPresent && (
          <div className="switch">
            <label>
              <input type="checkbox" checked onChange={this.handleClick} />
              <span className="lever" />
            </label>
          </div>
        )}
        {!this.state.isPresent && (
          <div className="switch">
            <label>
              <input type="checkbox" onChange={this.handleClick} />
              <span className="lever" />
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default ToggleStudent;
