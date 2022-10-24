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
      
      <Slideshow pictures={annonce.pictures} />
      <Titre title={annonce.title} />
      <Location location={annonce.location} />
      <Tags tags={annonce.tags} />
      <Avis rating={annonce.rating} />
      <Collapse title="Description" content={annonce.description} />
      <Collapse title="Equipements" content={annonce.equipments} />
    </div>
  );
}


