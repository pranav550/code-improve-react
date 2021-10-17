import React from "react";

export class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "code",
      lastname: "improve",
      count: 1,
    };
  }

  changeName = () => {
    // this.setState({
    //   firstname: "test",
    // });
    // below way is not work increment 2
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("new value", this.state.count);
    //   }
    // );
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("again new value", this.state.count);
    //   }
    // );

    // using old value
    this.setState((oldvalue) => ({
      count: oldvalue.count + 1,
    }));
    this.setState((oldvalue) => ({
      count: oldvalue.count + 1,
    }));

    //
    this.setState((state, props) => {
      console.log(state, props);
    });
  };
  render() {
    return (
      <>
        <h1>Hello Car {this.props.name}</h1>
        <p>{this.props.children}</p>
        <p>
          {this.state.firstname} {this.state.lastname}
        </p>
        <p>{this.state.count}</p>
        <button onClick={() => this.changeName()}>Update</button>
      </>
    );
  }
}

// export default Car;
