import * as React from "react";
import "./Titre.css";

export default function Titre(props) {
  const annonces = require('../../annonces.json')
  

  return (
    <div>
      {annonces.map((annonce) =>
        <div className="mb-title">
          <div key={annonce.id} className="titre">{annonce.title}</div>
        </div>
      )}
    </div>
  );
}

