import React, { Component } from "react";

class AssignmentCard extends Component {
  constructor(props) {
    const css = require("../components/views/teacher/assets/css/home.css").toString();
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
        <div className="abacus-flex-card card">
          <div className="card-content">
            <div onClick={this.handleClick} value={this.state.assignmentId}>
              <div>
                <span className="card-title">{this.state.assignmentName}</span>
                <p>
                  <strong>Type:</strong> {this.state.assignmentType}
                </p>

                <hr />
                <p>
                  <strong>Description:</strong> {this.state.assignmentDesc}
                </p>
                <p>
                  <strong>MaxScore:</strong> {this.state.maxScore}
                </p>
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
