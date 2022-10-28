// Importation de react
// Importation de link a partir de react router dom
// Importation du fichier css

import * as React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  // Constante annonces qui permet de récuperer les éléments du fichier json
  const annonces = require('../../annonces.json')

  return (
    <div className="divCards">
      {/* bouclage avec .map() pour afficher les annonces grâce a l'id
      ainsi que la photo de couverture de l'annonce et son titre */}
      {annonces.map((annonce) =>
        <Link className="links" to={"/fichelogement/" + annonce.id}>
        <ul className="cards cardHome" key={annonce.id} style={{ backgroundImage: `url(${annonce.cover})`}}>
          <li className="li">
            <div className="textShadow">{annonce.title}</div>
          </li> 
        </ul>
        </Link>
      )}
    </div>
  );
}


