// importation de react
// Importation de ReactDOMClient depuis reacr-dom/client
// Importation de BrowserRouter depuis react router dom
// Importation du fichier css
// Importation du fichier App.js
// Importation du fichier Header et Footer a partir du dossier pages

import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Header, Footer } from "./pages";

// 
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
