// Importation de react
// Importation du fichier css
// Importation de useState a partir de react

import React from "react";
import "./Slider.css"
import { useState } from "react";

export default function Slider(props) {

  // Création d'une constante pour les images
  // La constante fait apparaître les images de la card selectionnée
  // Si il n'y a aucune image alors 0 est retourné
    const [slideIdx, setCurrentSlide] = useState(0);
    const imgSize = () => {
        const sliderImg = document.querySelector('.slider-container img');
        if(!sliderImg){
            return 0;
        }
        return sliderImg.width;
    }

  // Création de contante pour la flèche de gauche
  // qui au clic sur la flèche va revenir sur l'image précèdente
    const onNext = () => {
        if(slideIdx === props.pictures.length - 1){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(slideIdx + 1)
        }
    }

    // Création de contante pour la flèche de doite
  // qui au clic sur la flèche va revenir sur l'image suivante
    const onPrev = () => {
        if(slideIdx === 0){
            setCurrentSlide(props.pictures.length - 1)
        } else {
            setCurrentSlide(slideIdx - 1)
        }
    }
     
  // Permet de cliquer sur les bullet point et de changer d'image
    const handleClick = (event, param) => {
      setCurrentSlide(param)
  };


  return (
    <div className="slider">
      <div className="slider-container"
        style={{
          transform:
            `translateX(-${slideIdx * imgSize()}px)`
        }}>
        {/* On boucle sur les images */}
        {props.pictures.map((picture) => < img
          className='slider-container-img'
        alt="slider" src={picture} key={picture} />)}
        
      </div>
      <div className="slider-controls">
        <span className="material-icons material-icons-chevron"
          onClick={onPrev}>
          chevron_left
        </span>
        <span className="material-icons span material-icons-chevron"
          onClick={onNext}>
          chevron_right
        </span>
      </div>
      <div className="bullet">
          {/* Boucle sur les images */}
          {props.pictures.map((picture, index) =>
            <span className="material-icons point material-icons-bullet"
              key={picture}
            onClick={event => handleClick(event, index)}>
            {/* Si slideIdx est la même que l'index alors on change 
            l'icon bullet point */}
            radio_button_{slideIdx === index ? 'checked' : 'unchecked'}
          </span>
        )}
        </div>
    </div>
  )
}