import React from "react";
import "./Slideshow.css";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function Slideshow() {
  return (
    <div>
      <div className="componentCarousel">
        <Carousel>
          <Carousel.Item>
            <img className="slider" src="../../../img/logo.svg" alt="slider" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider"
              src="../../../img/backgroundimage.png"
              alt="slider"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider"
              src="../../../img/backgroundhome.png"
              alt="slider"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slideshow;
