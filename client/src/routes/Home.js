import Main from "../components/Main";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>

      <Row>
        <Col>
          {props.token ? <h1>I got token</h1> : <h1>no token</h1>}
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
