import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import "./Hero.scss";

import logo from "../../../assets/logos/logo_diverlibro_1200x1200.png";
import photoKids1 from "../../../assets/hero/ninos-con-diverlibros-1.jpg";
import photoKids2 from "../../../assets/hero/ninos-con-diverlibros-2.jpg";
import photoKids3 from "../../../assets/hero/ninos-con-diverlibros-3.jpg";
import photoKids4 from "../../../assets/hero/ninos-con-diverlibros-4.jpg";

const Hero = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="hero">
      <AutoplaySlider
        animation="foldOutAnimation"
        cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
        className="hero__carousel"
        bullets={false}
        buttons={true}
        play={true}
        interval={6000}
        cancelOnInteraction={false}
      >
        <div>
          <div className="hero__text">
            <h3 className="hero__text--subtitle">
              <img
                className="hero__text--logo"
                src={logo}
                alt="Logotipo Diverlibros"
              />
            </h3>
          </div>
          <img
            src={photoKids1}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <div className="hero__text">
            <h3 className="hero__text--subtitle">
              Productos artesanales de fieltro
            </h3>
          </div>
          <img
            src={photoKids2}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <div className="hero__text">
            <h3 className="hero__text--subtitle">
              Aprendizaje basado en el <strong>método Montessori</strong>
            </h3>
          </div>
          <img
            src={photoKids3}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
        <div>
          <div className="hero__text">
            <h3 className="hero__text--subtitle">
              Aleja a los niños de las pantallas sumergiendolos en el juego y
              las historias a través de los sentidos
            </h3>
          </div>
          <img
            src={photoKids4}
            alt="Foto de niñas jugando con sus Diverlibros"
            className="hero__carousel--img"
          />
        </div>
      </AutoplaySlider>

      <h2 className="hero__title">
        Descubre los libros sensoriales más personalizables del mercado
      </h2>
    </div>
  );
};

export default Hero;
