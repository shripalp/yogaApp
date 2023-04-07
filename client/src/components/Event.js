import Button from "react-bootstrap/Button";
import eventService from "../services/eventService";

const Event = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();

    eventService.removeEvent(props.event._id);
  };
  return (
    <tr>
      <td>{props.event.eventname}</td>

      {props.token ? (
        <td>
          <Button variant="primary" type="submit" onClick={handleRemove}>
            delete
          </Button>
        </td>
      ) : null}
    </tr>
  );
};

export default Event;
