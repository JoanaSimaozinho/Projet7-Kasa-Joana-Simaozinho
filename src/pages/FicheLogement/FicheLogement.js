import * as React from "react";
import { Navigate, useParams } from "react-router-dom";

import {
  Slideshow,
  Titre,
  Tags,
  Avis,
  Location,
  Collapse,
  Avatar,
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
      <div className="divContainerElements">
        <div>
          <Titre title={annonce.title} />
          <Location location={annonce.location} />
          <div className="tags">
            {annonce.tags.map((tag) => <Tags content={tag} key={tag}/>)}
          </div>
        </div>
        <div className="divAvis">
          <Avis rating={annonce.rating} />
          <Avatar name={annonce.host.name} avatar={annonce.host.picture} />
        </div>
      </div>
      <div className="divCollapse">
        <Collapse title="Description" content={annonce.description} />
      <Collapse title="Equipements" content={annonce.equipments} />
      </div>
      
    </div>
  );
}


