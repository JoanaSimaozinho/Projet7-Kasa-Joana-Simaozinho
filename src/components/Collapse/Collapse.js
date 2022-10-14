import * as React from "react";
import "./Collapse.css";

function Collapse() {

  const caracteristiques = document.querySelectorAll('.caracteristiques')

  caracteristiques.forEach((item) => {
    
    item.addEventListener('click', function () {
      console.log('item cliqué');
      const next = item.nextElementSibling
      next.classList.toggle('visible')
      // icone = item.lastElementChild
      // console.log(icone);
      // icone.classList.toggle('fa-chevron-up')
    })
  })



  return (
    <div className="accordeon">
      {/* collapse 1 */}
      <div className="caracteristiques">
        <p>description</p>
        <i className="fas fa-chevron-down icon"></i>
      </div>
      <div className="informations">
        <p>dfgh</p>
      </div>

      {/* collapse 2 */}
      <div className="caracteristiques">
        <p>Equipements</p>
        <i className="fas fa-chevron-down icon"></i>
      </div>
      <div className="informations">
        <p>dfgh</p>
      </div>
    </div>
  );
}

export default Collapse;

