import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Col, Row, Button } from "react-bootstrap";

function Blog(props) {
  const location = useLocation();
  const image1 = location.state.image;
  const image2 = location.state.url;
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={6} md={6} ld={4}>
          <h1>{location.state.title}</h1>
          <h2> by: {location.state.author}</h2>

          {image1 ? (
            <Image className="img-fluid" src={image1} alt="blog-image" />
          ) : null}

          {image2 ? (
            <Image className="img-fluid" src={image2} alt="blog-image" />
          ) : null}

          <p>{location.state.content}</p>
          <Link to="/blogs">
            <Button variant="primary" size="lg">
              Back to Classes
            </Button>
          </Link>
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

export default Blog;
