import React, { Component } from "react";
import ClassroomsCard from "../../classroomCard";
import Draggable from 'react-draggable'

class TeacherHome extends Component {
  constructor(props) {
    const css = require('./assets/css/home.css').toString();

    super(props);
    this.state = {
      classrooms: props.classrooms,
      classroom: props.classroom,
      currentTeacher: props.currentTeacher,
      students: props.students
    };
    this.handleChange = this.handleChange.bind(this);
    // {deltaPosition, controlledPosition} = this.state;
  }
  getInitialState() {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  // onStart() {
  //   // this.setState({ activeDrags: ++this.state.activeDrags });
  // }

  // onStop() {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // }

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  }
  handleChange(classroomId) {
    this.props.onChange(classroomId);
  }
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const {deltaPosition, controlledPosition} = this.state;
    return (

      <React.Fragment>
        <style>${this.css}</style>
            <Draggable axis="x" {...dragHandlers}>
          <div className="abacus-container">
            {/* Loop through available classes, output cards */}
            {this.props.classrooms.map((classroom, i) => (
              <ClassroomsCard
                key={classroom._id}
                name={classroom.subject}
                value={classroom._id}
                classroom={classroom}
                students={classroom.studentsId}
                onChange={this.handleChange}
                />
                ))}
            {/* // END // */}

            {/* Add Class */}
            <div className="abacus-flex-card card add-class">
              <a className="modal-trigger" href="#add-class-modal">
                <div className="card-content">
                  <h3>Add Class</h3>
                  <i className="fa fa-plus"></i>
                </div>
              </a>
            </div>
          </div>
                </Draggable>
          {/* Modal */}
          <div id="add-class-modal" className="modal">
            <div className="modal-content">
              <h4>Add a class</h4>
              <p>Feature coming soon...</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Okay, i'll come back later.</a>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default TeacherHome;