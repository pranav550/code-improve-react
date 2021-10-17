import React, { Component } from "react";

class ClsEvent extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "pranav",
      lastname: "verma",
    };
    // this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent = () => {
    console.log("dddddddddd");
    this.setState({
      firstname: "shalaj",
      lastname: "verma",
    });
  };
  render() {
    return (
      <div>
        <p> class Called</p>
        <p>firstname:{this.state.firstname}</p>
        <p>lastname:{this.state.lastname}</p>
        {/* <button onClick={() => this.clickEvent()}>Class Add</button> */}
        {/* <button onClick={this.clickEvent.bind(this)}>Class Add</button> */}
        <button onClick={this.clickEvent}>Class Add</button>
      </div>
    );
  }
}

export default ClsEvent;
