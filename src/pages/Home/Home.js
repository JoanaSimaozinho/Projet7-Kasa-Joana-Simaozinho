// Importation de react ainsi que des fichiers banner et cards 
// qui sont situés dans le fichier components
// Ainsi que importation du fichier css de Home

import * as React from "react";
import { Banner, Cards } from "../../components/index";
import "./Home.css";

// Fichier page d'accueil qui contien La banner et les cards
// Banner et cards sont des composants réutilisables ils sont donc réalisés dans le dossier compnents
// Banner est réutilisé dans le fichier à propos et cards dans le fichier fiche logement

export default function Home(props) {

  return (
    <div className="body">
      {/* Je crée le contenu qui apparaît dans le composant banner de la page d'accueil
      puis j'utilise les props dans le fichier banner pour le faire apparaître dynamiquement
      Sinon le banner de la page à propos contiendra aussi le contenu */}
      <Banner content="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}