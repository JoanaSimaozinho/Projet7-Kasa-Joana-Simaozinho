// Importation de react
// Importation du fichier css du footer

import * as React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerDisplay">
        <div className="marginTopBottom">
          <img src="../img/white-logo.svg" alt="logo" className="logoFooter" />
        </div>
        <div>
          <p className="rightsReserved">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
