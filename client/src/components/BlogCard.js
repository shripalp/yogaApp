import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import blogService from "../services/blogService";
import React from "react";
//import CustomCard from "./CustomCard";
import Card from "react-bootstrap/Card";

const BlogCard = (props) => {
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 30,
      padding: "2rem",
    },

    cardText: {
      objectFit: "contain",
    },
  };

  const handleRemove = (event) => {
    event.preventDefault();
    blogService.remove(props.blog._id);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog", {
      state: {
        title: props.blog.title,
        author: props.blog.author,
        image: props.blog.image,
        content: props.blog.content,
      },
    });
  };
  return (
    <Col lg={4} md={4} sm={6} xs={12}>
      <Card className="m-1" bg="light" style={styles.card}>
        <Card.Img
          variant="top"
          src={props.blog.image}
          style={styles.cardImage}
        />
        <Card.Img className="img-fluid" variant="top" src={props.blog.url} />
        <Card.Body>
          <Card.Title>{props.blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.blog.author}
          </Card.Subtitle>
          <Card.Text style={styles.cardText}>{props.blog.content}</Card.Text>
          <Button onClick={handleClick} variant="primary">
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
