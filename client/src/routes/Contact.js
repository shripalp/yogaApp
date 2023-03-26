import React from "react";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { Container, Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form />
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

export default Contact;
