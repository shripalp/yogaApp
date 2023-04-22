import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogForm from "../components/BlogForm";
import BlogsList from "../components/BlogList";
//import FileUpload from "../components/Fileupload";
//import CustomCard from "../components/CustomCard";
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
      <Row className="mt-5">
        <Col xs={12} sm={12} md={6} lg={4}>
          {props.token ? <BlogForm /> : null}
        </Col>
      </Row>
      <Row className="mt-5">
        <BlogsList token={props.token} />
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
