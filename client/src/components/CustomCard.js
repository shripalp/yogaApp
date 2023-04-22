//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard(props) {
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
      width: props.width,
      height: props.height,
    },
    cardImage: {
      objectFit: "contain",
      borderRadius: 5,
    },
    cardText: {
      objectFit: "contain",
      height: "2rem",
    },
  };
  return (
    <Card className="m-1" bg={props.color} style={styles.card}>
      <Card.Img variant="top" src={props.img} style={styles.cardImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text style={styles.cardText}>{props.text}</Card.Text>
        <Card.Link href={props.url}>{props.link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
