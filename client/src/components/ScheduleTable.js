import Table from "react-bootstrap/Table";
import React from "react";
import classService from "../services/classService";
import YogaClass from "./YogaClass";

function ScheduleTable(props) {
  const [classnames, setClassnames] = React.useState([]);

  React.useEffect(() => {
    classService.getAll().then((c) => {
      setClassnames(c);
      //console.log(classnames);
    });
  }, [classnames]);

  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Teacher</th>
          <th>Location</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {classnames.map((yogaclass) => (
          <YogaClass
            key={yogaclass._id}
            yogaclass={yogaclass}
            token={props.token}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default ScheduleTable;
