import * as React from "react";
import "./Location.css";

export default function Location(props) {
  const annonces = require('../../annonces.json')
  console.log(annonces[0].location);

  return (
    <div className="mb-location">
      <div className="location">{props.location}</div>
    </div>
  );
}


