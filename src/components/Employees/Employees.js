import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
// import API from "../../utils/API";

const Employees = (props) => {
  // state = {
  //   items: [
  //     {
  //       id: 1,
  //       name: "Garlic Salt",
  //     },
  //     {
  //       id: 2,
  //       name: "Macaroni",
  //     },
  //     {
  //       id: 3,
  //       name: "Canned Fish",
  //     },
  //   ],
  //   newItem: "",
  // };

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   // console.log(value);

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newItem = {
  //     id: this.state.items.length + 1,
  //     name: this.state.newItem,
  //   };

  //   // console.log(newItem);

  //   const itemsArray = [...this.state.items];
  //   // console.log(itemsArray);

  //   itemsArray.push(newItem);

  //   // console.log(itemsArray);

  //   this.setState({
  //     items: itemsArray,
  //     newItem: "",
  //   });
  // };

  // render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                {/* <th name="image" onClick={props.handleSortImage} scope="col">
                  Image
                </th> */}
                <th
                  // value="picture.thumbnail"
                  // onClick={(value) => {
                  //   props.handleSortImage({ value });
                  //   console.log(`imagevalue: `, value);
                  // }}
                  scope="col"
                >
                  Image
                </th>
                <th
                  onClick={(e) => {
                    props.handleSort(e.target.textContent);
                    console.log(`sort`, e.target.textContent);
                  }}
                  scope="col"
                  // name="Name"
                >
                  Name
                </th>
                <th
                  onClick={(e) => {
                    props.handleSort(e.target.textContent);
                    console.log(`sort`, e.target.textContent);
                  }}
                  scope="col"
                >
                  Phone
                </th>
                <th
                  onClick={(e) => {
                    props.handleSort(e.target.textContent);
                    console.log(`sort`, e.target.textContent);
                  }}
                  scope="col"
                >
                  Email
                </th>
                <th onClick={props.handleSortDob} scope="col">
                  DOB
                </th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee) => (
                <EmployeeRow employee={employee} key={employee.id.value} />
                // <tr>HelloSir</tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            {/* <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="item" className="form-label">
                    Add new label to your pantry
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="item"
                    value={this.state.newItem}
                    name="newItem"
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form> */}
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Employees;
