import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  css() {
    var css = {
      fontSize: '18px'
    };
    return css;
  }

  handleDateChange(date) {
    let dateTime = new Date(date);
    dateTime = moment(dateTime).format("YYYY-MM-DD");
    this.props.onChange(dateTime);
  }

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      this.getAttendanceData();
    }
  }

  render() {
    return (
      <div className="form-group">
        <label><i class="far fa-calendar-alt" style={this.css()}></i> Date:</label>
        <DatePicker
          onChange={this.handleDateChange}
          name="classDate"
          dateFormat="MM/DD/YYYY"
          // value={props.classDate !== "" ? props.classDate : null}
        />
      </div>
    );
  }
}

export default SelectDate;
