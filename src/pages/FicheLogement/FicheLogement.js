import * as React from "react";
import { Slideshow, Titre, Tags, Avis, Location } from "../../components/index";
import "./FicheLogement.css";

function FicheLogement() {
  return (
    <div className="body">
      <Slideshow />
      <Titre />
      <Location />
      <Tags />
      <Avis />
    </div>
  );
}

export default FicheLogement;
