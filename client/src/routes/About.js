import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PDF from "../components/PDF2";
import Image from "react-bootstrap/Image";

import { Container, Col, Row } from "react-bootstrap";

function About(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <PDF
            file={require("../components/assets/SSY_certificate.pdf")}
            scale={0.7}
          />
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <Image
                className="cert"
                src={require("../components/assets/AYC_certificate.jpg")}
                width="600"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <PDF file={require("../components/assets/RegistryCard.pdf")} />
            </Col>
          </Row>
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

export default About;
