import * as React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { Slideshow } from "../index"

export default function Cards(props) {
    const annonces = require('../../annonces.json')

  return (
    
    <div>
      <ul className="cards cardHome">
        {annonces.map((annonce) => <li className="li" key={annonce.id}>
          <Link className="HomeParagraphCards" to={"/fichelogement/" + annonce.id}>{annonce.pictures}</Link>
          <Link className="HomeParagraphCards" to={"/fichelogement/" + annonce.id}>{annonce.title}</Link>
        </li> )}
      </ul>
    </div>
  );
}


