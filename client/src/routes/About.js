import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Container, Col, Row } from "react-bootstrap";

function About(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col>About Us</Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
