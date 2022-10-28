// importation de react
// Importation du fichier css

import * as React from "react";
import "./Avatar.css";

export default function Avatar(props) {

  return (
    <div className="avatar">
      <div className="profileDiv">
        {/* affichage du nom de l'utilisateur grâce aux props */}
        <p className="name">{props.name}</p>
      </div>
      <div>
        {/* affichage de la photo de l'utilisateur grâce aux props */}
        <img src={props.avatar} className="profilePicture" alt="profil" />
      </div>
    </div>

  );
}
