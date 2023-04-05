import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classService from "../services/classService";

function ClassesForm() {
  const [classname, setClassname] = React.useState("");
  const [teacher, setTeacher] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations

    const classObject = {
      classname: classname,
      teacher: teacher,
      location: location,
      time: time,
    };
    classService
      .create(classObject)
      .then((result) => {
        console.log("Success", result);
        setLocation("");
        setClassname("");
        setTeacher("");
        setTime("");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Enter yoga classes</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicClassName">
          <Form.Label>Class Description</Form.Label>
          <Form.Control
            type="text"
            name="classname"
            value={classname}
            onChange={(e) => setClassname(e.target.value)}
            placeholder="Enter class description"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTeacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            placeholder="Enter Teachers name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time"
          />
        </Form.Group>

        <Button
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
