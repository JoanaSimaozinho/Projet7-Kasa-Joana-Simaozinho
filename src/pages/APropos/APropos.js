// Importation de react
// Importation des fichier banner et collapse 
// Importation du fichier css de la page a propos

import * as React from "react";
import { Banner, Collapse } from "../../components/index";
import "./APropos.css";

function APropos() {
  return (
    <div className="body">

      {/* éléments banner et collapse qui sont réutilisés 
      dans la page a propos */}
      <div className="bannerApropos">
        <Banner />
      </div>

      <div className="divCollapseAPropos">

        {/* Changement du titre et du contenu du collapse 
        qui est affiché à partir du fichier collapse grâce 
        aux props */}
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </div>
  );
}

export default APropos;
