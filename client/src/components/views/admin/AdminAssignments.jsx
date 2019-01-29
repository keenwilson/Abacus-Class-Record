import React, { Component } from "react";
import { Col, Row, Container } from "../../common/Grid";
const moment = require('moment');

class AdminAssignments extends Component {
  state = {
    assignmentName:'',
    assignmentType:'',
    studentsId:[],
    dateStarted:Date.now(),
    dueDate:moment('DD/MM/YYYY'),

  };

  render() {
      const css = require('./assets/css/Assignments.css').toString();

    return (
      <Container fluid>
          <style>${this.css}</style>
        <Row>
        <h1 className="text-center">Assignments</h1>
                        <h2 className="text-center">Add New Assignment</h2>
                        <form>
                            <div className="formControl">
                                <label htmlFor="assignmentName">Assignment Name:</label>
                                <input type="text" id="assignmentName" name="assignmentName" placeholder="Assignment Title"
                                        value={this.state.assignmentName}
                                        onChange={this.handleInputChange} />
                            </div>
                            <div className="formControl">
                                <label htmlFor="assignmentType">Assignment Type</label>
                                <input type="text" id="assignmentType" name="type" placeholder="Assignment Type"
                                        value={this.state.assignmentType}
                                        onChange={this.handleInputChange} />
                            </div>
                            <div className="formControl">
                                <label htmlFor="dueDate">Date Due:</label>
                                <input type="text" id="dueDate" name="dueDate" placeholder="Date Due"
                                        value={this.state.dueDate}
                                        onChange={this.handleInputChange} />
                            </div>
                            <input type="submit" value='Add Assignment'
                                    disabled={!(this.state.assignmentName && this.state.assignmentType && this.state.dueDate)}
                                    onClick={this.handleFormSubmit} />
                        </form>
          <Col size="md-7">
            <h1 className="text-center">Show all the assignments</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminAssignments;
