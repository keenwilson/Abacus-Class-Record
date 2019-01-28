import React, { Component } from "react";

class SelectClass extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async e => {
    try {
      const differentClassroom = e.target.value;
      await this.props.onChange(differentClassroom);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
      }
    }
  };

  render() {
    return (
      <select onChange={this.handleChange}>
        <option>Select Class</option>
        {this.props.classrooms.map((classroom, i) => (
          <option key={classroom._id} value={classroom._id}>
            {classroom.subject}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectClass;
