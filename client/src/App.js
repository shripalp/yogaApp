import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Schedule from "./routes/Schedule";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import { Container, Col, Row } from "react-bootstrap";

//import Protected from "./components/Protected";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
//import Cookies from "universal-cookie";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleLogin = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      {!login ? (
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={4}>
              <Form onSubmit={(e) => handleLogin(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>

                {/* submit button */}
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </Button>
                {/* display success message */}
                {login ? (
                  <p className="text-success">You Are Logged in Successfully</p>
                ) : (
                  <p className="text-danger">You Are Not Logged in</p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Container fluid>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
