import * as React from "react";
import Caroussel from "./Caroussel/Caroussel";
import Description from "./Description/Description";
import Equipements from "./Equipements/Equipements";
import "./FicheLogement.css";
import Titre from "./Titre/Titre";

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
