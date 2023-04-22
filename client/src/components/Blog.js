import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import blogService from "../services/blogService";
import CustomCard from "./CustomCard";

const Blog = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();
    blogService.remove(props.blog._id);
  };
  return (
    <Col lg={4} md={4} sm={6} xs={12}>
      <CustomCard
        title={props.blog.title}
        subtitle={props.blog.author}
        text={props.blog.content}
        img={props.blog.image}
        width="18rem"
        height="18rem"
        color="light"
        link="takeme"
        url="/blog"
      />

      {props.token ? (
        <Button variant="primary" type="submit" onClick={handleRemove}>
          delete
        </Button>
      ) : null}
    </Col>
  );
};

export default Blog;
