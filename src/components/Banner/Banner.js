import * as React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="cards card figure">
      <div className="divContainer">
        <p className="HomeParagraph container">{props.content}</p>
      </div>
    </div>
  );
}


