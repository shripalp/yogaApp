import Header from "../components/Header2";
import Footer from "../components/Footer";
import Main from "../components/Main2";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main />
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

export default Home;
