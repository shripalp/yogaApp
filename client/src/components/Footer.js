import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: shripalp@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/shripalp",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/shripalp",
  },
];

function Footer() {
  const myInfo = {
    name: "Shripal Parikh",
    address: "Calgary, Alberta, Canada",
    email: "shripalp@gmail.com",
  };
  return (
    <footer>
      <Container fluid className="bg-dark my-5 p-3">
        <Row className="justify-content-lg-center">
          <Col xs={8} className="footer">
            {myInfo.name}
            <br></br>
            {myInfo.address}
            <br></br>
            {myInfo.email}
          </Col>
          <Col xs={4}>
            <ul style={{ listStyle: "none" }} className="list-group p-2">
              {socials.map((item) => (
                <li className="p-2">
                  <a key={item.url} href={item.url}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      key={item.url}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
