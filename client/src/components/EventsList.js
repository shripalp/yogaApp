import Table from "react-bootstrap/Table";
import React from "react";
import classService from "../services/classService";
import Event from "./Event";

function ScheduleTable(props) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    classService.getAllEvents().then((c) => {
      setEvents(c);
      //console.log(classnames);
    });
  }, [events]);

  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Event Name</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <Event key={event._id} event={event} token={props.token} />
        ))}
      </tbody>
    </Table>
  );
}

export default ScheduleTable;
