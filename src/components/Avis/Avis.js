// importation de react
// Importation du fichier css

import * as React from "react";
import "./Avis.css";

export default function Avis(props) {
  // Création de constantes pour 
  // afficher les étoiles colorées et les étoiles grises
  const ColoredStar = () => {
    return <img src="../../../img/stars.png" alt="etoiles colorées" />;
  };
  const EmptyStar = () => {
    return <img src="../../../img/star-empty.png" alt="etoiles grises" />;
  };

  return (
    <div className="avis">
      <div className="star">
        {/*  */}
        {Array.from({ length: parseInt(props.rating) }, (v, idx) => (
          <ColoredStar key={"colored-" + idx} />
        ))}
        
        {/*  */}
        {Array.from({ length: 5 - parseInt(props.rating) }, (v, idx) => (
          <EmptyStar key={"empty-" + idx} />
        ))}
      </div>  
    </div>

  );
}


