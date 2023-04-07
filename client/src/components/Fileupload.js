import React, { useState } from "react";
//import axios from "axios";
import eventService from "../services/eventService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [eventname, setEventname] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("event", eventname);

    eventService.upload(formData).then((response) => {
      alert("file uploaded");
      setFile(null);
      setEventname("");
    });
  };

  return (
    <>
      <h2>Upload your file here</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            name="eventname"
            value={eventname}
            onChange={(e) => setEventname(e.target.value)}
            placeholder="Enter Event Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicFile">
          <Form.Label>Upload File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Upload
        </Button>
      </Form>
    </>
  );
}

export default FileUpload;
