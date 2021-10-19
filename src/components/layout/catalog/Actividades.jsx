import React from "react";
import { Link } from "react-router-dom";
import "./Actividades.scss";
import "./Product.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import act6meses18meses1 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-1.jpg";
import act6meses18meses2 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-2.jpg";
import act6meses18meses3 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-3.jpg";
import act6meses18meses4 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-4.jpg";
import act6meses18meses5 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-5.jpg";
import act6meses18meses6 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-6.jpg";
import act6meses18meses7 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-7.jpg";
import act6meses18meses8 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-8.jpg";
import act6meses18meses9 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-9.jpg";
import act6meses18meses10 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-10.jpg";
import act6meses18meses11 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-11.jpg";
import act6meses18meses12 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-12.jpg";
import act6meses18meses13 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-13.jpg";
import act6meses18meses14 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-14.jpg";
import act6meses18meses15 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-15.jpg";
import act6meses18meses16 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-16.jpg";
import act6meses18meses17 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-17.jpg";
import act6meses18meses18 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-18.jpg";
import act6meses18meses19 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-19.jpg";
import act6meses18meses20 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-20.jpg";
import act6meses18meses21 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-21.jpg";
import act6meses18meses22 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-22.jpg";
import act6meses18meses23 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-23.jpg";
import act6meses18meses24 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-24.jpg";
import act6meses18meses25 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-25.jpg";
import act6meses18meses26 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-26.jpg";
import act6meses18meses27 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-27.jpg";
import act6meses18meses28 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-28.jpg";
import act6meses18meses29 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-29.jpg";
import act6meses18meses30 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-30.jpg";
import act6meses18meses31 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-31.jpg";
import act6meses18meses32 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-32.jpg";
import act6meses18meses33 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-33.jpg";
import act6meses18meses34 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-34.jpg";
import act6meses18meses35 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-35.jpg";
import act6meses18meses36 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-36.jpg";
import act6meses18meses37 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-37.jpg";
import act6meses18meses38 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-38.jpg";
import act6meses18meses39 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-39.jpg";
import act6meses18meses40 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-40.jpg";

import act18meses2anos1 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-1.jpg";
import act18meses2anos2 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-2.jpg";
import act18meses2anos3 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-3.jpg";
import act18meses2anos4 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-4.jpg";
import act18meses2anos5 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-5.jpg";
import act18meses2anos6 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-6.jpg";
import act18meses2anos7 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-7.jpg";
import act18meses2anos8 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-8.jpg";
import act18meses2anos9 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-9.jpg";
import act18meses2anos10 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-10.jpg";
import act18meses2anos11 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-11.jpg";
import act18meses2anos12 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-12.jpg";
import act18meses2anos13 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-13.jpg";
import act18meses2anos14 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-14.jpg";
import act18meses2anos15 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-15.jpg";
import act18meses2anos16 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-16.jpg";
import act18meses2anos17 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-17.jpg";
import act18meses2anos18 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-18.jpg";
import act18meses2anos19 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-19.jpg";
import act18meses2anos20 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-20.jpg";
import act18meses2anos21 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-21.jpg";
import act18meses2anos22 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-22.jpg";
import act18meses2anos23 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-23.jpg";
import act18meses2anos24 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-24.jpg";
import act18meses2anos25 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-25.jpg";
import act18meses2anos26 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-26.jpg";
import act18meses2anos27 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-27.jpg";
import act18meses2anos28 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-28.jpg";
import act18meses2anos29 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-29.jpg";
import act18meses2anos30 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-30.jpg";
import act18meses2anos31 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-31.jpg";
import act18meses2anos32 from "../../../assets/products/actividades/18-meses-2-anos/18-meses-2-anos-actividad-32.jpg";

import act2anos5anos1 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-1.jpg";
import act2anos5anos2 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-2.jpg";
import act2anos5anos3 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-3.jpg";
import act2anos5anos4 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-4.jpg";
import act2anos5anos5 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-5.jpg";
import act2anos5anos6 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-6.jpg";
import act2anos5anos7 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-7.jpg";
import act2anos5anos8 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-8.jpg";
import act2anos5anos9 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-9.jpg";
import act2anos5anos10 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-10.jpg";
import act2anos5anos11 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-11.jpg";
import act2anos5anos12 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-12.jpg";
import act2anos5anos13 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-13.jpg";
import act2anos5anos14 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-14.jpg";
import act2anos5anos15 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-15.jpg";
import act2anos5anos16 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-16.jpg";
import act2anos5anos17 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-17.jpg";
import act2anos5anos18 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-18.jpg";
import act2anos5anos19 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-19.jpg";
import act2anos5anos20 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-20.jpg";
import act2anos5anos21 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-21.jpg";
import act2anos5anos22 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-22.jpg";
import act2anos5anos23 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-23.jpg";
import act2anos5anos24 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-24.jpg";
import act2anos5anos25 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-25.jpg";
import act2anos5anos26 from "../../../assets/products/actividades/2-5-anos/2-5-anos-actividad-26.jpg";

const Actividades = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <h2>
        <span className="fontDiverlibros">Actividades</span>
      </h2>

      <div className="activities">
        <div className="act act1">
          <div>
            <h3 className="activities__title">de 6 a 18 meses</h3>
            <p className="activities__text">
              Estas actividades están pensadas para trabajar aspectos y
              habilidades que empiezan desarrollar los más pequeños de la casa.
              En este tiempo, los niñxs comienzan a investigar e interesarse por
              las diferentes texturas. también a relacionar y diferenciar los
              diferentes animales, por ejemplo, y reconocer sus sonidos. Son
              capaces de imitar pequeños gestos, reconocer algunas partes del
              cuerpo, diferenciar colores, entretenerse con cuentos y disfrutar
              con los juegos simbólicos. Todos estos son los aspectos que han
              sido trabajados en este grupo de actividades.
            </p>
          </div>
          <AutoplaySlider
            animation="foldOutAnimation"
            cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
            bullets={true}
            buttons={false}
            play={true}
            interval={5000}
            cancelOnInteraction={false}
            className="sliderAct"
          >
            <div>
              <img
                src={act6meses18meses1}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses2}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses3}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses4}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses5}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses6}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses7}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses8}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses9}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses10}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses11}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses12}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses13}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses14}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses15}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses16}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses17}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses18}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses19}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses20}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses21}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses22}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses23}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses24}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses25}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses26}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses27}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses28}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses29}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses30}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses31}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses32}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses33}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses34}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses35}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses36}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses37}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses38}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses39}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act6meses18meses40}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
          </AutoplaySlider>
        </div>

        <div className="act act2">
          <div>
            <h3 className="activities__title">de 18 meses a 2 años</h3>
            <p className="activities__text">
              En esta etapa, los pequeños empiezan a adquirir nuevas habilidades
              y cada vez son más capaces de superar pequeños hitos. El trabajo
              principal se centra en estimular la motricidad fina, la
              concentración, la coordinación ojo-mano. Para ello, se trabaja con
              los animales, personajes reconocidos por ellos, colores, formas,
              etc. Además, en esta etapa los niños funcionan muy bien por
              imitación. Copian todo lo que ven. Por eso, los juegos tipo:
              cocinar, lavar la ropa, disfrazar al muñeco,... les gusta tanto.
              En este grupo de actividades podrás encontrar y trabajar todos
              estos aspectos.
            </p>
          </div>
          <AutoplaySlider
            animation="foldOutAnimation"
            cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
            bullets={true}
            buttons={true}
            play={true}
            interval={5000}
            cancelOnInteraction={false}
            className="sliderAct"
          >
            <div>
              <img
                src={act18meses2anos1}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos2}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos3}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos4}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos5}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos6}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos7}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos8}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos9}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos10}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos11}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos12}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos13}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos14}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos15}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos16}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos17}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos18}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos19}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos20}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos21}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos22}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos23}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos24}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos25}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos26}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos27}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos28}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos29}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos30}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos31}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act18meses2anos32}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
          </AutoplaySlider>
        </div>

        <div className="act act3">
          <div>
            <h3 className="activities__title">de 2 a 5 años</h3>
            <p className="activities__text text3">
              Los niñxs de esta edad dan un salto importante en cuanto a
              habilidades y conocimientos. Así como destreza manual, memoria,
              etc. Es una etapa en la que demandan aprender cosas nuevas
              continuamente: abrochar y desabrocharse solos la chaqueta, atarse
              sus zapatos, cerrar y abrir una cremallera,.. También el mundo de
              los juegos donde pueden participar más personas comienzan a
              centrar su atención: tres en raya con sus personajes favoritos,
              juego de memoria, tangram, puzzles... Cómo veis, las posibilidades
              son muchas y, con todas ellas, la diversión está asegurada.
            </p>
          </div>
          <AutoplaySlider
            animation="foldOutAnimation"
            cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
            bullets={true}
            buttons={true}
            play={true}
            interval={5000}
            cancelOnInteraction={false}
            className="sliderAct"
          >
            <div>
              <img
                src={act2anos5anos1}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos2}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos3}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos4}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos5}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos6}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos7}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos8}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos9}
                alt="Foto de actividad para 6 a 18 meses"
                className="sliderAct__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos10}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos11}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos12}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos13}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos14}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos15}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos16}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos17}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos18}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos19}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos20}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos21}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos22}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos23}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos24}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos25}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={act2anos5anos26}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
          </AutoplaySlider>
        </div>
      </div>

      <div className="product__order">
        <h3>
          Elige las actividades que más te gusten y escríbeme
          <br />
          <br />
          ¿Eliges Diverlibro o Mini Diverlibro?
        </h3>
        <ol className="product__order--list">
          <li>
            Envíame un correo o WhatsApp con las características básicas que
            quieres.
          </li>
          <li>
            En un máximo de 24 horas me pongo en contacto contigo para concretar
            los detalles de tu libro sensorial.
          </li>
        </ol>
        <Link to="/contacto">
          <a name="link-contact" title="Ir a Contacto" className="button">
            Elige tu Mini Diverlibro
          </a>
        </Link>
      </div>
    </>
  );
};

export default Actividades;
