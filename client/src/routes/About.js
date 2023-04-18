import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PDF from "../components/PDF2";
import Image from "react-bootstrap/Image";
import CustomCard from "../components/CustomCard";

import { Container, Col, Row } from "react-bootstrap";

function About(props) {
  //const image2 = require("../components/assets/lotus.jpg");
  const shripalInfo = {
    title: "Shripal Parikh",
    subtitle: "Yoga Teacher, YA-200h",
    text: "Yoga Teacher",
    width: 600,
    url: "/Contact",
    img: require("../components/assets/shripal1.jpg"),
    link: "Contact Shripal",
  };
  // const title = "yoga";
  // const text = "yoga is good";
  // const width = 100;
  // const url = "/Contact";
  // const image = require("../components/assets/lotus.jpg");
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
            scale={0.4}
          />
        </Col>
        <Col>
          <CustomCard {...shripalInfo} />
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <Image
                className="cert"
                src={require("../components/assets/AYC_certificate.jpg")}
                width="300"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <PDF
                file={require("../components/assets/RegistryCard.pdf")}
                scale={0.3}
              />
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
