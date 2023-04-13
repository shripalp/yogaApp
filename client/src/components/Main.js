import React from "react";
import "../scss/App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
//import Button from "react-bootstrap/Button";
import Link from "react-bootstrap/NavLink";
import Card from "react-bootstrap/Card";

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item className="item">
              <img
                className="d-block"
                src={require("./assets/shripal1.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="item">
              <img
                className="d-block"
                src={require("./assets/shripal.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="item">
              <img
                className="d-block"
                src={require("./assets/primary_series.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("./assets/SSY POSTER FINAL-page-001.jpg")}
            />
            <Card.Body>
              <Card.Title>Sri Sri Yoga</Card.Title>
              <Card.Text>Join in person SSY program</Card.Text>
              <Link href="/contact" className="btn btn-primary">
                Sign up
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("./assets/SSY POSTER FINAL-page-001.jpg")}
            />
            <Card.Body>
              <Card.Title>Sri Sri Yoga Online</Card.Title>
              <Card.Text>Join online SSY program</Card.Text>

              <Link href="/contact" className="btn btn-primary">
                Sign up
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
