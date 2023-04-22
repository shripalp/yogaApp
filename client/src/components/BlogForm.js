import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import blogService from "../services/blogService";

function ClassesForm() {
  const [blog, setBlog] = React.useState({
    title: "",
    author: "",
    content: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations

    const result = await blogService.create(blog);
    setBlog([...blog, result]);
  };

  return (
    <>
      <h2>Enter A Blog</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicBlogTitle">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            placeholder="Enter Blog title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            placeholder="Enter Blog title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="content"
            value={content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            placeholder="Enter contnet"
          />
        </Form.Group>

        <Button
          className="m-3"
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ClassesForm;
