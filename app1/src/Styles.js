import React from "react";
import "./custom.css";
import customStyle from "./custom.module.css";
export default function Styles() {
  return (
    <div>
      <h1>Hello Code Improve</h1>
      <p className="fontCls">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nam
        consectetur, accusantium alias autem expedita unde nihil repellat
        cupiditate, nobis facilis quae minus. Labore nobis suscipit accusantium.
        Nisi, similique suscipit.
      </p>
      <p className={`${customStyle.fontCls1}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        excepturi eveniet quam sed nihil recusandae adipisci? Consequuntur quis
        iste dolores enim adipisci recusandae placeat, excepturi laborum ullam
        ipsam suscipit reprehenderit?
      </p>
    </div>
  );
}
