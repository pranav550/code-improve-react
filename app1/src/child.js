import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Child {this.props.name}</p>

        <p>
          <button onClick={() => this.props.myEvent("child")}>
            child button
          </button>
        </p>
      </div>
    );
  }
}

export default Child;
