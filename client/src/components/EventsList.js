import Table from "react-bootstrap/Table";
import React from "react";
import eventService from "../services/eventService";
import Event from "./Event";

function EventsList(props) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    eventService.getAllEvents().then((c) => {
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

export default EventsList;
