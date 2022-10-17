import * as React from "react";
import { Navigate, useParams } from "react-router-dom";

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
  let params = useParams()

  const annonces = require('../../annonces.json')
  const annonce = annonces.find((x) => x.id === params.id)
  if (!annonce) {
    return <Navigate to="/errorpage" />;
  } 
  return (
    <div className="body">
      {annonce.title}
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


