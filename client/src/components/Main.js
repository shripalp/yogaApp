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
  const srisriYoga = {
    venue:
      "North Glenmore Park Community Association, 2231 Longridge Dr. SW Calgary, Calgary, Alberta, Canada",
    fee: "Regular: CAD150.00, Student: CAD120.00, Senior: CAD120.00",
    times:
      "May 4-7, 2003 THU, FRI: 6:00pm - 8:00pm and SAT, SUN: 10:00am-12:30pm",
    teachers: "Shripal Parikh, Mahesh Mittal",
    contact: "Mahesh Mittal, 5879668545, mahesh.mittal@artofliving.org",
  };

  return (
    <Container>
      <Row className="mt-3">
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
                src={require("./assets/yoga1.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="item">
              <img
                className="d-block"
                src={require("./assets/yoga3.webp")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="card border-0 mt-0">
        <Col xs={12} sm="8" md={6} lg={6}>
          {" "}
          <Card>
            <Card.Img variant="top" src={require("./assets/srisriyoga.jpg")} />
            <Card.Body>
              <Card.Title>Sri Sri Yoga</Card.Title>
              <Card.Text>
                Energize and integrate your mind, body and spirit Improve
                self-awareness, health and flexibility Get stronger and grounded
                with yoga's poses, breath-work & insights<br></br>
                <br></br>
                {srisriYoga.venue}
                <br></br>
                <br></br>
                {srisriYoga.times}
                <br></br>
                <br></br>
                {srisriYoga.fee}
                <br></br>
                <br></br>
                Teachers: {srisriYoga.teachers}
                <br></br>
                <br></br>
                {srisriYoga.contact}
              </Card.Text>
              <Link
                href="https://register.artofliving.org/ca/civicrm/event/register?pt=15&id=11744&lcMessages=en_GB&reset=1&utm_source=none&utm_medium=none&utm_campaign=none&utm_content=none&utm_id=none&utm_term=none&utm_date=2023-04-14T02:03:11Z&utm_url=https://www.artofliving.org/ca-en/program/11744&utm_ref=none&utm_landing=https%3A%2F%2Fwww.artofliving.org%2Fca-en"
                className="btn btn-primary btn-lg"
                role="button"
                target="_blank"
              >
                Register
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
