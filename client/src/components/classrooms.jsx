import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/common/Grid";

class Classrooms extends Component {
  state = {
    classrooms: []
  };
  render() {
    const { user } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col size="md-5">
            <h1 className="text-center">Classrooms</h1>
            <h1 className="text-center">Create New Classroom</h1>
            {user && (
              <Link
                to="/classrooms/new"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
                New Classroom
              </Link>
            )}
          </Col>
          <Col size="md-7">
            <h1 className="text-center">Show all classrooms in the database</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Classrooms;
