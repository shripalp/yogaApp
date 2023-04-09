import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const form = useRef();
  const SERVICE_ID = "service_m5l41f4";
  const TEMPLATE_ID = "template_0lg3ehc";
  const USER_ID = "T9_owlQThsPzUx2yP";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)

      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicText1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter Name"
        />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText2">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={(e) => handleSubmit(e)} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
