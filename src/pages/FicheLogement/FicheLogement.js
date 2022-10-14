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
      <div className="divTags">
        <Tags />
        <Tags />
      </div>
      <Avis />
      <Collapse />
      
      
    </div>
  );
}

export default FicheLogement;
