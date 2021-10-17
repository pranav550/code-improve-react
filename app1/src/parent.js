import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: "",
    };
  }
  clickEvents(data) {
    console.log("abc called " + data);
    if (data === "parent") {
      this.setState({
        show: true,
        value: data,
      });
    }
    //  else {
    //   this.setState({
    //     show: false,
    //     value: data,
    //   });
    // }
  }
  render() {
    return (
      <div>
        {this.state.show ? (
          <p>{this.state.value}</p>
        ) : (
          <p>{this.state.value}</p>
        )}
        <Child name="Dummy" myEvent={this.clickEvents} />
        Parent
        <p>
          <button onClick={() => this.clickEvents("parent")}>
            Parent button
          </button>
        </p>
      </div>
    );
  }
}

export default Parent;
