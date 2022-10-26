import * as React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="cards card figure">
      <div>
        <p className="HomeParagraph">{props.content}</p>
      </div>
    </div>
  );
}


