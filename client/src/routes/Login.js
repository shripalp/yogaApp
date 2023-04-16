import React from "react";

//import Register from "../components/Register";
import LoginForm from "../components/LoginForm";
import LogoutForm from "../components/LogoutForm";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center"
        >
          {!props.token ? <LoginForm /> : <LogoutForm />}
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
