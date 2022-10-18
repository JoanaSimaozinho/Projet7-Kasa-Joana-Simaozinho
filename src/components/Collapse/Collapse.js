import * as React from "react";
import "./Collapse.css";

export default function Collapse(props) {
  const annonces = require('../../annonces.json')
  



  const clic = event => {
    console.log(event.currentTarget.toggle('fa-chevron-up'));
  }
  const caracteristiques = document.querySelectorAll('.caracteristiques')

  caracteristiques.forEach((item) => {
    
    item.addEventListener('click', function () {
      console.log('item cliqué');
      const next = item.nextElementSibling
      next.classList.toggle('visible')
      const icone = item.lastElementChild
      icone.classList.toggle('fa-chevron-up')
    })
  })



  return (
    <div className="accordeon">
      <div className="caracteristiques">
        <p>description</p>
        <i className="fas fa-chevron-down icon" onClick={clic}></i>
      </div>
      <div className="informations">
        <p className="paragraphCollapse">{annonces.description}</p>
      </div>
    </div>
  );
}



