import React, { Component } from "react";

class AssignmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentId: props.assignmentId,
      name: props.name,
      assignmentType: props.assignmentType,
      description: props.assignmentDesc,
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
      <div className="col s12 m3">
        <div className="card-wrapper">
          <div
            className="card"
            onClick={this.handleClick}
            value={this.state.assignmentId}
          >
            <div className="card-content">
              <span className="card-title">{this.state.name}</span>
              <p>
                <strong>Type:</strong> {this.state.assignmentType}
              </p>

              <hr />
              <p>
                <strong>Description:</strong> {this.state.description}
              </p>
              <p>
                <strong>MaxScore:</strong> {this.state.maxScore}
              </p>
              <p>
                <strong>Due Date:</strong> {this.state.dueDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentCard;
