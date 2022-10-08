import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <img src="../img/logo.svg" alt="logo" className="logo" />
        </div>
        <div className="linksHeader">
          <div>
            <Link to="/" className="link">
              Accueil
            </Link>
          </div>
          <div>
            <Link to="/apropos" className="link">
              A propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
