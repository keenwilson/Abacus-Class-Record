import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/navbar.css";

class AbacusNavbar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  // That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument.
  handleChange(e) {
    const differentClassroom = e.target.value;
    this.props.onChange(differentClassroom);
  }

  render() {
    console.log("classroom as props", this.props.classrooms);

    return (
      <nav className="abacus-nav">
        <h1>Teacher Nav for </h1>

        <select onChange={this.handleChange}>
          {this.props.classrooms.map((classroom, i) => (
            <option key={i} value={classroom._id}>
              {classroom.subject}
            </option>
          ))}
        </select>
        <Link to="/teacher/attendance">Attendance</Link>
        <Link to="/teacher/assignments">Assignments</Link>
        <Link to="/teacher/grades">Grade</Link>
      </nav>
    );
  }
}

export default AbacusNavbar;
