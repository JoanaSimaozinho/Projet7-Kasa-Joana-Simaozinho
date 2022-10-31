// Importation de react
// Importation de Navigate et useParams du react router dom
// Importation des fichiers utilisés dans la fiche logement comme le titre les avis, ...
// Importation du fichier css

import * as React from "react";
import { Navigate, useParams } from "react-router-dom";

import {
  Gallery,
  Titre,
  Tags,
  Avis,
  Location,
  Collapse,
  Avatar,
} from "../../components/index";
import "./FicheLogement.css";


export default function FicheLogement(props) {
  // Utilisation de useParams pour paraméter la contante annonce
  let params = useParams()

  // Constante qui récupère les données dans le fichier json
  const annonces = require('../../annonces.json')

  // Constante qui permet de trouver l'information cherchée dans le fichier json avec .find()
  // Et params qui permet de trouver cet élément cherché grâce a son id
  const annonce = annonces.find((x) => x.id === params.id)

  // Si l'élément cherché n'est pas trouve Navigate nous redirige vers la page d'erreur 404
  if (!annonce) {
    return <Navigate to="/errorpage" />;
  } 
  return (
    <div className="body"> 
      {/* Grâce au code précedent {annonces.pictures}, 
      {annonce.title}, etc on récupère les photos de l'annonce son titre,
      sa localisation, etc... */}
      <Gallery pictures={annonce.pictures} />
      <div className="divContainerElements">
        <div>
          <Titre title={annonce.title} />
          {/* Nous bouclons les tags avec .map() pour pouvoir faire apparître tous les tags de l'annonce */}
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
        {/* Avec title="..." je nomme mon collapse 
        car si je le fais directement sur le fichier collapse alors 
        tous les collapse utilisés se nomeront description ou équipements par exemple
        Collapse est un composant utilisé également dans le fichier A propos*/}
        <Collapse title="Description" content={annonce.description} />
        <Collapse title="Equipements" content={annonce.equipments} />
      </div>
      
    </div>
  );
}


