import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, FicheLogement, APropos, ErrorPage } from "../index";

function RoutesPages() {
  return (
    <div>
      <Routes>
        {/* Route Home */}
        <Route path="/" element={<Home />} />
        {/* route FicheLogement */}
        <Route path="fichelogement" element={<FicheLogement />} />
        {/* Route APropos */}
        <Route path="apropos" element={<APropos />} />
        {/* route ErrorPage */}
        <Route path="errorpage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default RoutesPages;
