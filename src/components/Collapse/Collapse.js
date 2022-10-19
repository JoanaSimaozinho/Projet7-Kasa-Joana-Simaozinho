import * as React from "react";
import { useParams } from "react-router-dom";
import "./Collapse.css";

export default function Collapse(props) {
  let params = useParams()
  const annonces = require('../../annonces.json')
  
  const description = annonces.find((description) => description.id === params.id)
  if (!description) {
    return null
  } 

   const equipments = annonces.find((equipments) => equipments.id === params.id)
  if (!description) {
    return null
  } 

  const clic = event => {
    console.log(this.classList.toggle('fa-chevron-up'));
  }
  // const caracteristiques = document.querySelectorAll('.caracteristiques')

  // caracteristiques.forEach((item) => {
    
  //   item.addEventListener('click', function () {
  //     console.log('item cliqué');
  //     const next = item.nextElementSibling
  //     next.classList.toggle('visible')
  //     const icone = item.lastElementChild
  //     icone.classList.toggle('fa-chevron-up')
  //   })
  // })



  return (
    <div>
      {annonces.map((annonce) => 
        <div className="accordeon">
          <div className="caracteristiques">
            <p>description</p>
            <i className="fas fa-chevron-down icon" onClick={clic}></i>
          </div>
          <div className="informations">
            <p className="paragraphCollapse" key={description.id}>{annonce.description}</p>
          </div>
        </div>
      )}
      {annonces.map((annonce) => 
        <div className="accordeon">
          <div className="caracteristiques">
            <p>Equipements</p>
            <i className="fas fa-chevron-down icon" onClick={clic}></i>
          </div>
          <div className="informations">
            <p className="paragraphCollapse" key={equipments.id}>{annonce.equipments}</p>
          </div>
        </div>
        )}
    </div>
    
  );
}



