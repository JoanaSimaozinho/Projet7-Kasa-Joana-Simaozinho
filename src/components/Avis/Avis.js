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
  console.log(annonces[0].rating);
  console.log(annonces[0].host.name);
  console.log(annonces[0].host.picture);
  
  
  return (
    <div>
      <div className="avis">
        <div className="stars">
          <img src={props.rating} alt="etoiles colorées" />
          <img src={props.rating} alt="etoiles grises" />

        </div>
        <div className="name">
          <p>{props.name}</p>
          <img src={props.picture} alt="profil" />
        </div>
      </div>
    </div>
  );
}


