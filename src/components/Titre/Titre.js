import * as React from "react";
import "./Titre.css";

export default function Titre(props) {
  const annonces = require('../../annonces.json')
  console.log(annonces[0].title);


  return (
    <div className="mb-title">
      <div className="titre">{props.title}</div>
    </div>
  );
}

