// importation de react
// Importation du fichier RoutesPages a partir du dossier pages

import * as React from "react";
import { RoutesPages } from "./pages";

function App() {
  // Récupère toutes les routes crées dans le fichier RoutesPages
  return (
    <div>
      <RoutesPages />
    </div>
  );
}

export default App;
