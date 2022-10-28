import * as React from "react";
import "./Tags.css";

export default function Tags(props) {

// Récupération des tags de chaque annonce individuellement
// C'est a dire que ce fichier est utilisé pour toutes les fiches logement
// Mais les props permettent de récuperer le ou  les tags de la fiche logement cliquée
// grâce a l'id indiqué dans le fichier "fiche logement" 
// Ainsi pas besoin de faire plusieurs fichiers "tags"

  return (
    <div>
        <div className="mb-tags">
          <div className="tags">
          <div className="tag">
            <p className="tagParagraph">{props.content}</p>
          </div>
          </div>
        </div>
    </div>
    
  );
}

