import * as React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  const annonces = require('../../annonces.json')

  return (
    <div>
      {annonces.map((annonce) =>
        <Link className="links" to={"/fichelogement/" + annonce.id}>
        <ul className="cards cardHome" key={annonce.id} style={{ backgroundImage: `url(${annonce.cover})` }}>
          <li className="li">
            <div>{annonce.title}</div>
          </li> 
        </ul>
        </Link>
      )}
    </div>
  );
}


