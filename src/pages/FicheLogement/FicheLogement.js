import * as React from "react";
import {
  Caroussel,
  Description,
  Equipements,
  Titre,
} from "../../components/index";
import "./FicheLogement.css";

function FicheLogement() {
  return (
    <div className="body">
      <Caroussel />
      <Titre />
      <Description />
      <Equipements />
    </div>
  );
}

export default FicheLogement;
