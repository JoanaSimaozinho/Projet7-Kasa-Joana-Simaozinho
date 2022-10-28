// Importation de react
// Importation de Link de react router dom
// Importation du fichier css du footer

import * as React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";


function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="goToHome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
