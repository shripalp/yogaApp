import React from "react";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import Register from "../components/Register";
import LoginForm from "../components/LoginForm";
import { Container, Col, Row } from "react-bootstrap";

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <LoginForm />
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

export default Login;
