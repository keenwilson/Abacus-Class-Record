import React from "react";
import { Col, Row, Container } from "../components/common/Grid";
import Jumbotron from "../components/common/Jumbotron";

const Oops = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Something’s missing!</h1>
            <p className="text-center">Error Code 404</p>
            <p className="text-center">
              It looks like the page you’re looking for can’t be found… try
              going back a page and choosing another option.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Oops;
