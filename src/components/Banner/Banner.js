// Importation de react
// importation du fichier css

import * as React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="cards card divCard">
      <div className="divContainer">
        {/* Récupération du contenu (si contenu il y a) grâce aux props */}
        <p className="HomeParagraph container">{props.content}</p>
      </div>
    </div>
  );
}