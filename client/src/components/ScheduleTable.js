import Table from "react-bootstrap/Table";
import React from "react";
import classService from "../services/classService";
import YogaClass from "./YogaClass";

function ScheduleTable() {
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
        {classnames.map((c) => (
          <YogaClass key={c._id} yoga={c} />
        ))}
      </tbody>
    </Table>
  );
}

export default ScheduleTable;
