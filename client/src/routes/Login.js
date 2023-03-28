import React from "react";

import Register from "../components/Register";
import LoginForm from "../components/LoginForm";
import { Container, Col, Row } from "react-bootstrap";

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
