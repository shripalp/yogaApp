import React from "react";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { Container, Col, Row } from "react-bootstrap";

function Schedule() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
