import * as React from "react";
import "./Cards.css";

export default function Cards(props) {
    const annonces = require('../../annonces.json')
  console.log(annonces[0].location);
  return (
    <div>
      <button className="btn">
        <figure className="cards figure">
          <figcaption className="figcaption">
              <p className="HomeParagraphCards">{props.location}</p>
          </figcaption>
        </figure>
      </button>
    </div>
  );
}


