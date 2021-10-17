import React from "react";

export const Bike = (props) => {
  return (
    <div>
      <h1>Hello Bike {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};

//export default Bike;
