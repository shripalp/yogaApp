const YogaClass = (props) => {
  return (
    <tr>
      <td>{props.yoga.classname}</td>
      <td>{props.yoga.teacher}</td>
      <td>{props.yoga.location}</td>
      <td>{props.yoga.time}</td>
    </tr>
  );
};

export default YogaClass;
