// Importation de react
// Importation du fichier css de Location

import * as React from "react";
import "./Location.css";

export default function Location(props) {
  
// Récupération des localisation de chaque annonce individuellement
// C'est a dire que ce fichier est utilisé pour toutes les fiches logement
// Mais les props permettent de récuperer la localisation de l'annonce 
// de la fiche logement cliquée
// grâce a l'id indiqué dans le fichier "fiche logement" 
// Ainsi pas besoin de faire plusieurs fichiers "location"
  return (
    <div>
      <div className="mb-location">
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}


