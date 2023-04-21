import Button from "react-bootstrap/Button";

import blogService from "../services/blogService";

const Blog = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();
    blogService.remove(props.yogaclass._id);
    console.log("delete button pressed");
  };
  return (
    <tr>
      <td>{props.blog.title}</td>
      <td>{props.blog.author}</td>
      <td>{props.blog.contnent}</td>

      {props.token ? (
        <td>
          <Button variant="primary" type="submit" onClick={handleRemove}>
            delete
          </Button>
        </td>
      ) : null}
    </tr>
  );
};

export default Blog;
