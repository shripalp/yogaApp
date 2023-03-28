import React from "react";

import ScheduleTable from "../components/Table";
import { Container, Col, Row } from "react-bootstrap";

function Schedule() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ScheduleTable />
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
