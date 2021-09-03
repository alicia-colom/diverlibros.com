import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import photoKids1 from "../../../assets/hero/niños-con-diverlibros-1.jpg";
import photoKids2 from "../../../assets/hero/niños-con-diverlibros-2.jpg";
import photoKids3 from "../../../assets/hero/niños-con-diverlibros-3.jpg";
import photoKids4 from "../../../assets/hero/niños-con-diverlibros-4.jpg";
import "./Hero.scss";

const Hero = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="hero__container">
      <div className="hero__text">
        <h2 className="hero__text--title">
          Descubre los libros sensoriales más personalizables del mercado
        </h2>
        <h3 className="hero__text--subtitle">
          Productos artesanales de fieltro basados en el{" "}
          <strong>método Montessori</strong> para alejar a los niños de las
          pantallas y sumergirlos en el juego y las historias a través de los
          sentidos
        </h3>
      </div>
      <AutoplaySlider
        animation="foldOutAnimation"
        cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
        className="hero__carousel"
        bullets={false}
        buttons={false}
        play={true}
        interval={7000}
        cancelOnInteraction={false}
      >
        <div
        // data-src="/path/to/image-0.png"
        >
          <img
            src={photoKids1}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <img
            src={photoKids2}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <img
            src={photoKids3}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <img
            src={photoKids4}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Hero;
