//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard(props) {
  return (
    <Card style={{ width: props.width }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.url}>{props.link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
