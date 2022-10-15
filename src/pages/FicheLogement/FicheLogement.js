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

export default function FicheLogement(props) {
  // const annonces = require('../../annonces.json')
  // console.log(annonces[0].id);
  // console.log(annonces[0].title);
  // console.log(annonces[0].pictures);
  // console.log(annonces[0].description);
  // console.log(annonces[0].host.name);
  // console.log(annonces[0].host.picture);
  // console.log(annonces[0].location);
  // console.log(annonces[0].rating);
  // console.log(annonces[0].aquipments);
  // console.log(annonces[0].tags);
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

      <div>
        <Collapse />
      </div>
      
    </div>
  );
}


