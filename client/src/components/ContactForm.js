import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText2">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="5" placeholder="Your message" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
