import * as React from "react";
import "./Avis.css";

function Avis() {
  return (
    <div>
      <div className="avis">
        {/* Etoiles et nom de la personne qui a donné son avis */}
        <div className="stars"> stars </div>
        <div className="name"> nom </div>
      </div>
    </div>
  );
}

export default Avis;
