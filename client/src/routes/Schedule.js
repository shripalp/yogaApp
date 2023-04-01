import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClassesForm from "../components/ClassesForm";

import ScheduleTable from "../components/ScheduleTable";
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
        <Col xs={12} sm={12} md={6} lg={4}>
          {props.token ? <ClassesForm /> : null}
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
