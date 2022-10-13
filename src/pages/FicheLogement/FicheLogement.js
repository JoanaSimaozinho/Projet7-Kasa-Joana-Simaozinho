import * as React from "react";
import {
  Slideshow,
  Titre,
  Tags,
  Avis,
  Location,
  Collapse,
} from "../../components/index";
import "./FicheLogement.css";

function FicheLogement() {
  return (
    <div className="body">
      <Slideshow />
      <Titre />
      <Location />
      <Tags />
      <Avis />

      <div>
        <Collapse />
      </div>
      <div>
        <Collapse />
      </div>
    </div>
  );
}

export default FicheLogement;
