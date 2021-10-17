import React from "react";

export default function List(props) {
  console.log(props);

  return (
    <div>
      <p>id:{props.userinfo.id}</p>
      <p>name:{props.userinfo.name}</p>
      <p>email:{props.userinfo.email}</p>
    </div>
  );
}
