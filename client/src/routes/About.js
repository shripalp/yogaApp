import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PDF from "../components/PDF2";
//import Image from "react-bootstrap/Image";
import CustomCard from "../components/CustomCard";

import { Container, Col, Row } from "react-bootstrap";

function About(props) {
  const shripalInfo = {
    title: "Shripal Parikh",
    subtitle: "Yoga Teacher, YA-200h",
    text: "Shripal is teaching yoga for past 10 years. He is trained in Iyengar style of yoga and SriSri yoga and has completed 200 hours yoga training with both.  He teaches yoga to all age groups.",
    width: 600,
    url: "/Contact",
    img: require("../components/assets/shripal1.jpg"),
    link: "Contact Shripal",
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row className="mt-5 d-flex flex-wrap">
        <Col lg={4} md={6}>
          <CustomCard {...shripalInfo} />
        </Col>
        {/* <Col>
          <PDF
            file={require("../components/assets/SSY_certificate.pdf")}
            scale={0.3}
          />
        </Col> */}
        <Col ld={4} md={6}>
          <PDF
            scale={0.7}
            file={require("../components/assets/RegistryCard.pdf")}
          />
        </Col>
        {/* <Col>
          <Image
            className="ayccert"
            src={require("../components/assets/AYC_certificate.jpg")}
            width={600}
          />
        </Col> */}
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
