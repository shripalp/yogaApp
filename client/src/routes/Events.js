import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FileUpload from "../components/Fileupload";
//import Image from "react-bootstrap/Image";
//import img from "../components/assets/uploadedImage";
import { Container, Col, Row } from "react-bootstrap";
import EventsList from "../components/EventsList";
import PDF from "../components/PDF";

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
        <Col>
          <EventsList token={props.token} />
        </Col>
      </Row>
      <Row className="m-5">
        <Col>
          <PDF
            file={require("../components/assets/IDY 2016.pdf")}
            scale="1.5"
          />
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

export default Events;
