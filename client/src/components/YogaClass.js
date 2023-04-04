import Button from "react-bootstrap/Button";
import classService from "../services/classService";

const YogaClass = (props) => {
  const handleRemove = (event) => {
    event.preventDefault();
    classService.remove(props.yogaclass._id);
    console.log("delete button pressed");
  };
  return (
    <tr>
      <td>{props.yogaclass.classname}</td>
      <td>{props.yogaclass.teacher}</td>
      <td>{props.yogaclass.location}</td>
      <td>{props.yogaclass.time}</td>
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

export default YogaClass;
