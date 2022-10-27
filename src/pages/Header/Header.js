import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="body">
      <div className="header">
        <div className="divHeader">
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
