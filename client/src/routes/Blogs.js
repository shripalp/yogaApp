import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import FileUpload from "../components/Fileupload";
import CustomCard from "../components/CustomCard";
//import Image from "react-bootstrap/Image";
//import img from "../components/assets/uploadedImage";
import { Container, Col, Row } from "react-bootstrap";
//import EventsList from "../components/EventsList";
//import PDF from "../components/PDF2";

function Blogs(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <CustomCard title="my blog" />
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

export default Blogs;
