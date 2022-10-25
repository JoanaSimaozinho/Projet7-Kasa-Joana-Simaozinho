import * as React from "react";
import "./Avatar.css";

export default function Avatar(props) {

  return (
    <div className="avatar">
      <div className="profileDiv">
        <p className="name">{props.name}</p>
      </div>
      <div>
        <img src={props.avatar} className="profilePicture" />
      </div>
    </div>

  );
}
