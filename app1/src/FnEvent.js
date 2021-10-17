import React from "react";

export default function FnEvent() {
  function clickEvent() {
    console.log("yes called");
  }
  return (
    <div>
      <p>hello</p>
      <button onClick={clickEvent}>Add</button>
    </div>
  );
}
