import * as React from "react";
import "./Avis.css";

export default function Avis(props) {

  // const ColoredStar = () => {
  //   return <img src="../../../img/stars.png" alt="etoiles colorées" />
  // }
  // const EmptyStar = () => {
  //   return <img src="../../../img/star-empty.png" alt="etoiles grises" />
  // }

  const annonces = require('../../annonces.json')
  
  return (
    <div>
      {annonces.map((annonce) =>
        <div className="avis">
          <div className="stars">
            <img src={annonce.rating} alt="etoiles colorées" />
            <img src={annonce.rating} alt="etoiles grises" />

          </div>
          <div className="profileDiv">
            <p className="name">{annonce.host.name}</p>
            <img src={annonce.host.picture} alt="profil" className="profilePicture" />
          </div>
        </div>
      )}
    </div>
  );
}


