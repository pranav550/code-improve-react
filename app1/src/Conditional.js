import React, { Component } from "react";
import List from "./List";

class Conditional extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      employee: ["Amir", "ankit", "akash"],
      userList: [
        { id: 1, name: "ram", email: "ram@gmail.com" },
        { id: 2, name: "rahul", email: "rahul@gmail.com" },
        { id: 3, name: "ramesh", email: "ramesh@gmail.com" },
      ],
    };
  }
  render() {
    const Employee = this.state.employee.map((item, index) => (
      <h2 key={index}>
        {item}-{index}
      </h2>
    ));

    const userList = this.state.userList.map((data, index) => (
      <List userinfo={data} key={index} />
    ));

    return (
      <div>
        {Employee}
        {userList}
      </div>
    );
  }
}

export default Conditional;
