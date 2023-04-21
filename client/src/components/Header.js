import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
//import Cookies from "universal-cookie";
import logo from "./assets/shripal.jpg";
import "../scss/App.scss";

function Header(props) {
  const user = JSON.parse(window.localStorage.getItem("loggedUser"));
  console.log(user);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logo}
            className="d-inline-block align-top"
            roundedCircle
            fluid
            width="100"
            alt="logo"
          />
          Yoga with Shripal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>

            <Nav.Link href="/login">
              {props.token ? <>{user}</> : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
