import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FileUpload from "../components/Fileupload";
import { Container, Col, Row } from "react-bootstrap";
//import EventsList from "../components/EventsList";

function Events(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col>{props.token ? <FileUpload /> : null}</Col>
      </Row>
      <Row>
        <Col></Col>
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
