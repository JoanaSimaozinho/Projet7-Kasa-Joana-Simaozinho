// Importation de React
// Importation de Route et Routes à partir de react router dom
// Importation des fichier Home, FicheLogement, APropos et ErrorPage à partir de l'index du dossierpages

import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, FicheLogement, APropos, ErrorPage } from "./index";

function RoutesPages() {
  return (
    <div>

      {/* Les routes permettent de naviguer entre les différentes pages du site web */}
      <Routes>
        {/* Route Home */}
        <Route path="/" element={<Home />} />
        {/* route FicheLogement */}
        <Route path="fichelogement/:id" element={<FicheLogement />} />
        {/* Route APropos */}
        <Route path="apropos" element={<APropos />} />
        {/* route ErrorPage */}
        <Route path="errorpage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default RoutesPages;
