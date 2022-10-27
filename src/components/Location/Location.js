import * as React from "react";
import "./Location.css";

export default function Location(props) {
  

  return (
    <div>
      <div className="mb-location">
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}


