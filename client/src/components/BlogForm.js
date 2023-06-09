import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import blogService from "../services/blogService";
import FileBase64 from "react-file-base64";
import Alert from "react-bootstrap/Alert";

function BlogForm() {
  const [blog, setBlog] = React.useState({
    title: "",
    author: "",
    content: "",
    url: "",
    image: "",
  });

  const [visible, setVisible] = React.useState(false);

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations

    const result = await blogService.create(blog);
    setVisible(true);
    const emptyBlog = {
      title: "",
      author: "",
      url: "",
      content: "",
      image: "",
    };
    setBlog(emptyBlog);
    setTimeout(() => {
      setVisible(false);
    }, 3000);

    console.log(result);
    //setBlog([...blog, result]);
  };

  return (
    <>
      {visible ? <Alert variant="primary">Submitted</Alert> : null}
      <h2>Enter A Blog</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicBlogTitle">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
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
        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Url</Form.Label>
          <Form.Control
            type="url"
            name="url"
            onChange={(e) => setBlog({ ...blog, url: e.target.value })}
            placeholder="Enter Blog title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="content"
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            placeholder="Enter contnet"
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicImage">
          <Form.Label>Upload Image:</Form.Label>
          <FileBase64
            multiple={false}
            type="file"
            onDone={({ base64 }) => setBlog({ ...blog, image: base64 })}
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

export default BlogForm;
