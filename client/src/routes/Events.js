import React from "react";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";

function Events() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>Events</Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
