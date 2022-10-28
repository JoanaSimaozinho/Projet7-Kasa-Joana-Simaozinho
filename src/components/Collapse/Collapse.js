// Importation de react
// importation du fichier css
// Importation de useState à partir de react

import * as React from "react";
import "./Collapse.css";
import { useState } from "react";

export default function Collapse(props) {

  // Le contenu du collapse est invisible
  const [visible, setVisibility] = useState(false);

  // Récupère le contenu des collapse grâce aux props
  const contentType = typeof props.content;

  // si 
  if (contentType === "object") {
    props.content.map((item, index) => item);
  }

  return (
    <div className="accordeon">
      {/* Au clic le contenu devient visible */}
      <div className="caracteristiques" onClick={() => setVisibility(!visible)}>

        {/* Permet de récupérer le titre écrit dans le fichier
         fiche logement du collapse grâce aux props */}
        <p className="collapsName">{props.title}</p>

        {/*  */}
        <i
          className={`icon fas ${
            visible ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        ></i>

        {/*  */}
      </div>
      {visible && (
        <div className="informations">
          {contentType === "string" && (
            <p className="paragraphCollapse">{props.content}</p>
          )}
          {contentType === "object" &&
            props.content.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )}
    </div>
  );
}