import * as React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div>
      <button className="btn">
      <figure className="cards figure">
        <figcaption className="figcaption">
          <p className="HomeParagraphCards">Titre de la location</p>
        </figcaption>
        </figure>
      </button>
    </div>
  );
}

export default Cards;
