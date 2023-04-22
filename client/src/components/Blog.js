import Button from "react-bootstrap/Button";

import blogService from "../services/blogService";
import CustomCard from "./CustomCard";

const Blog = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();
    blogService.remove(props.blog._id);
  };
  return (
    <>
      <CustomCard
        title={props.blog.title}
        subtitle={props.blog.author}
        text={props.blog.content}
        img={props.blog.image}
      />

      {props.token ? (
        <Button variant="primary" type="submit" onClick={handleRemove}>
          delete
        </Button>
      ) : null}
    </>
  );
};

export default Blog;
