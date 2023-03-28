import Main from "../components/Main";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
