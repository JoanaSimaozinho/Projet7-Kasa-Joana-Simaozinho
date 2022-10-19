import * as React from "react";
import "./Location.css";

export default function Location(props) {
  const annonces = require('../../annonces.json')
  

  return (
    <div>
      {annonces.map((annonce) =>
        <div className="mb-location">
          <div key={annonce.id} className="location">{annonce.location}</div>
        </div>)}
      </div>
  );
}


