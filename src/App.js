import * as React from "react";
import { Home } from "./components";
// import { RoutesPages } from "./components/RoutesPages/RoutesPages";
import { FicheLogement, APropos, ErrorPage } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <RoutesPages /> */}
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

export default App;
