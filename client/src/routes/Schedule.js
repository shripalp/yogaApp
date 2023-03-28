import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ScheduleTable from "../components/Table";
import { Container, Col, Row } from "react-bootstrap";

function Schedule(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ScheduleTable />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
