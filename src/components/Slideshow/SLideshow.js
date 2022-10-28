import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slideshow.css";

// importation de Navigation, Pagination, Mousewheel et keybors a partir de "swiper"
// Importation du fichier css
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "./Slideshow.css"

export default function Slideshow(props) {
  return (
    <div>
      <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      rewind={true}
      >
        
        {/* Bouclage sur le slider avec .map() pour faire apparaître 
        les images de la fiche logement cliquée */}
      {props.pictures.map((picture, index) => (
        <SwiperSlide>
          <img key={index} src={picture} alt="photos" className="images" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
