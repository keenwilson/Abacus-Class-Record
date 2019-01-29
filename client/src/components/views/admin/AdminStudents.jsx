import React, { Component } from "react";
import { Col, Row, Container } from "../../common/Grid";

class AdminStudents extends Component {
    state = {
        Students: []
    };
    render() {
        const css = require('./assets/css/Students.css').toString();

        return (
            <div>
                <style>${this.css}</style>
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <h1 className="text-center">Students</h1>
                            <h2 className="text-center">Add New student</h2>
                            <form>
                                <div className="formControl">
                                    <label htmlFor="studentFirstName">First Name:</label>
                                    <input type="text" id="studentFirstName" placeholder="First Name..."/>
                                </div>
                                <div className="formControl">
                                    <label htmlFor="studentLastName">Last Name:</label>
                                    <input type="text" id="studentLastName" placeholder="Last Name..."/>
                                </div>
                                <input type="submit" value="Add student"/>
                            </form>
                        </Col>
                        <Col size="md-6">
                            <h2 className="text-center">Show all Students in database</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AdminStudents;
