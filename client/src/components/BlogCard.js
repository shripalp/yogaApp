import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Navigate } from "react-router-dom";
import blogService from "../services/blogService";
import React from "react";
//import CustomCard from "./CustomCard";
import Card from "react-bootstrap/Card";

const BlogCard = (props) => {
  const { click, setClick } = React.useState(false);
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
      width: props.width,
      height: props.height,
    },
    cardImage: {
      objectFit: "contain",
      width: "15rem",
      height: "6rem",
      borderRadius: 5,
      padding: "1rem",
    },
    cardText: {
      objectFit: "contain",
      height: "4rem",
      width: "5rem",
    },
  };

  const handleRemove = (event) => {
    event.preventDefault();
    blogService.remove(props.blog._id);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setClick(true);
  };
  return (
    <Col lg={4} md={4} sm={6} xs={12}>
      {click && <Navigate to="/blog" replace={true} />}
      <Card className="m-1" bg="light" style={styles.card}>
        <Card.Img
          variant="top"
          src={props.blog.image}
          style={styles.cardImage}
        />
        <Card.Body>
          <Card.Title>{props.blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.blog.subtitle}
          </Card.Subtitle>
          <Card.Text style={styles.cardText}>{props.blog.text}</Card.Text>
          <Button onclick={handleClick} type="submit" variant="primary">
            Go somewhere
          </Button>
          <Card.Link href="/contact">contact me</Card.Link>
        </Card.Body>
      </Card>
      {props.token ? (
        <Button variant="danger" type="submit" onClick={handleRemove}>
          delete
        </Button>
      ) : null}
    </Col>
  );
};

export default BlogCard;
