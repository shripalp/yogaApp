import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

function Blog(props) {
  const location = useLocation();
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{location.state.title}</h1>
          <h2> by: {location.state.author}</h2>
          <img src={location.state.image} alt="logo"></img>
          <p>{location.state.content}</p>
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

export default Blog;
