import * as React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  const annonces = require('../../annonces.json')


  return (
    
    <div>
      
      {annonces.map((annonce) =>
        <ul className="cards cardHome" key={annonce.id} style={{ backgroundImage: `url(${annonce.cover})` }}>
          <li className="li">
            <Link className="HomeParagraphCards" to={"/fichelogement/" + annonce.id}>{annonce.title}</Link>
          </li> 
        </ul>
      )}
    </div>
  );
}


