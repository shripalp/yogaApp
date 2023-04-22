import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import blogService from "../services/blogService";
import FileBase64 from "react-file-base64";

function ClassesForm() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations

    const blog = {
      title: title,
      author: author,
      content: content,
    };
    blogService
      .create(blog)
      .then((result) => {
        console.log("Success", result);
        setTitle("");
        setAuthor("");
        setContent("");
      })
      .catch((error) => {
        error = new Error();
      });
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
        <Form.Group controlId="formBasicImage">
          <Form.Label>Upload Image</Form.Label>
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
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
