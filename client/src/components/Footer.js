import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/App.scss";

function Footer() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/free-endpoint")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <footer>
      <Container fluid className=" bg-primary my-5 p-3">
        <Row className="justify-content-lg-center">
          <Col>
            <p>This is Footer</p>
            <p>{!data ? "...loading" : data}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
