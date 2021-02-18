import React from "react";

const EmployeeRow = (props) => {
  return (
    <tr>
      <th scope="row">
        <img src={props.employee.picture.thumbnail} />
      </th>
      <td>{props.employee.name.first}</td>
      <th>{props.employee.phone}</th>
      <td>{props.employee.email}</td>
      <td>{props.employee.dob.date}</td>
    </tr>
  );
};

export default EmployeeRow;
