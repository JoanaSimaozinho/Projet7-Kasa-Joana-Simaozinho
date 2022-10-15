import * as React from "react";
import "./Tags.css";

export default function Tags(props) {
  const annonces = require('../../annonces.json')
  console.log(annonces[0].tags);

  return (
    <div className="mb-tags">
      <div className="tags">
        <div className="tag">{props.tags}</div>
      </div>
    </div>
  );
}

