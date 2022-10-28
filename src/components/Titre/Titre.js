// Importation de react
// Importation du fichier css titre

import * as React from "react";
import "./Titre.css";


// Récupération des titres de chaque annonce individuellement
// C'est a dire que ce fichier est utilisé pour toutes les fiches logement
// Mais les props permettent de récuperer le titre de la fiche logement cliquée
// grâce a l'id indiqué dans le fichier "fiche logement" 
// Ainsi pas besoin de faire plusieurs fichiers "titre"
export default function Titre(props) {
  return (
    <div>
      <div className="mb-title">
        <div className="titre">{props.title}</div>
      </div>
    </div>
  );
}

