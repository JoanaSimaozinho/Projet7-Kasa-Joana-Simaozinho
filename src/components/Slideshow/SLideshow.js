import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slideshow.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slideshow(props) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      rewind={true}
    >
      {props.pictures.map((picture, index) => (
        <SwiperSlide>
          <img key={index} src={picture} alt="photos" className="images" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
