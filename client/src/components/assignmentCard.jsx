import React, { Component } from "react";

class AssignmentCard extends Component {
  constructor(props) {
    const css = require('../components/views/teacher/assets/css/home.css').toString();
    const customcss = require('../components/views/teacher/assets/css/assignments.css');

    super(props);
    this.state = {
      assignmentId: props.assignmentId,
      assignmentName: props.assignmentName,
      assignmentType: props.assignmentType,
      assignmentDesc: props.assignmentDesc,
      maxScore: props.maxScore,
      dueDate: props.dueDate
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const assignmentId = e.target.value;
    this.props.onClick(assignmentId);
  }
  render() {
    return (
      <div>
        <style>${this.css}</style>
        <style>${this.customcss}</style>
        <div className="abacus-flex-card card">
          <div className="card-content">
            <div onClick={this.handleClick} value={this.state.assignmentId}>
              <div>
                <span className="card-title">{this.state.assignmentName}</span>
                <h6><strong>Type:</strong> {this.state.assignmentType}</h6>
                <h6><strong>MaxScore:</strong> {this.state.maxScore}</h6>
                <hr />
                <p>Description: {this.state.assignmentDesc}</p>
                {/* Add Class */}
                <div className="card add-class">
                  <a className="modal-trigger" href="#add-class-modal">
                    <div className="card-content">
                      <h3>Add Files</h3>
                      <i className="fa fa-plus" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentCard;
