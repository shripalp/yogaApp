import React from "react";

import ContactForm from "../components/Form";
import { Container, Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
