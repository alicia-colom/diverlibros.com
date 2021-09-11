import React from "react";
import { Link } from "react-router-dom";
import "./Actividades.scss";
import "./Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import actividad6meses18meses1 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-1.jpg";
import actividad6meses18meses2 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-2.jpg";
import actividad6meses18meses3 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-3.jpg";
import actividad6meses18meses4 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-4.jpg";
import actividad6meses18meses5 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-5.jpg";
import actividad6meses18meses6 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-6.jpg";
import actividad6meses18meses7 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-7.jpg";
import actividad6meses18meses8 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-8.jpg";
import actividad6meses18meses9 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-9.jpg";
import actividad6meses18meses10 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-10.jpg";
import actividad6meses18meses11 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-11.jpg";
import actividad6meses18meses12 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-12.jpg";
import actividad6meses18meses13 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-13.jpg";
import actividad6meses18meses14 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-14.jpg";
import actividad6meses18meses15 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-15.jpg";
import actividad6meses18meses16 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-16.jpg";
import actividad6meses18meses17 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-17.jpg";
import actividad6meses18meses18 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-18.jpg";
import actividad6meses18meses19 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-19.jpg";
import actividad6meses18meses20 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-20.jpg";
import actividad6meses18meses21 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-21.jpg";
import actividad6meses18meses22 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-22.jpg";
import actividad6meses18meses23 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-23.jpg";
import actividad6meses18meses24 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-24.jpg";
import actividad6meses18meses25 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-25.jpg";
import actividad6meses18meses26 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-26.jpg";
import actividad6meses18meses27 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-27.jpg";
import actividad6meses18meses28 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-28.jpg";
import actividad6meses18meses29 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-29.jpg";
import actividad6meses18meses30 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-30.jpg";
import actividad6meses18meses31 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-31.jpg";
import actividad6meses18meses32 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-32.jpg";
import actividad6meses18meses33 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-33.jpg";
import actividad6meses18meses34 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-34.jpg";
import actividad6meses18meses35 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-35.jpg";
import actividad6meses18meses36 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-36.jpg";
import actividad6meses18meses37 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-37.jpg";
import actividad6meses18meses38 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-38.jpg";
import actividad6meses18meses39 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-39.jpg";
import actividad6meses18meses40 from "../../../assets/products/actividades/6-18-meses/6-18-meses-actividad-40.jpg";

import actividad18meses2años1 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-1.jpg";
import actividad18meses2años2 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-2.jpg";
import actividad18meses2años3 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-3.jpg";
import actividad18meses2años4 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-4.jpg";
import actividad18meses2años5 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-5.jpg";
import actividad18meses2años6 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-6.jpg";
import actividad18meses2años7 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-7.jpg";
import actividad18meses2años8 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-8.jpg";
import actividad18meses2años9 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-9.jpg";
import actividad18meses2años10 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-10.jpg";
import actividad18meses2años11 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-11.jpg";
import actividad18meses2años12 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-12.jpg";
import actividad18meses2años13 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-13.jpg";
import actividad18meses2años14 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-14.jpg";
import actividad18meses2años15 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-15.jpg";
import actividad18meses2años16 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-16.jpg";
import actividad18meses2años17 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-17.jpg";
import actividad18meses2años18 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-18.jpg";
import actividad18meses2años19 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-19.jpg";
import actividad18meses2años20 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-20.jpg";
import actividad18meses2años21 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-21.jpg";
import actividad18meses2años22 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-22.jpg";
import actividad18meses2años23 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-23.jpg";
import actividad18meses2años24 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-24.jpg";
import actividad18meses2años25 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-25.jpg";
import actividad18meses2años26 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-26.jpg";
import actividad18meses2años27 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-27.jpg";
import actividad18meses2años28 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-28.jpg";
import actividad18meses2años29 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-29.jpg";
import actividad18meses2años30 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-30.jpg";
import actividad18meses2años31 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-31.jpg";
import actividad18meses2años32 from "../../../assets/products/actividades/18-meses-2-años/18-meses-2-años-actividad-32.jpg";

import actividad2años5años1 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-1.jpg";
import actividad2años5años2 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-2.jpg";
import actividad2años5años3 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-3.jpg";
import actividad2años5años4 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-4.jpg";
import actividad2años5años5 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-5.jpg";
import actividad2años5años6 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-6.jpg";
import actividad2años5años7 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-7.jpg";
import actividad2años5años8 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-8.jpg";
import actividad2años5años9 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-9.jpg";
import actividad2años5años10 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-10.jpg";
import actividad2años5años11 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-11.jpg";
import actividad2años5años12 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-12.jpg";
import actividad2años5años13 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-13.jpg";
import actividad2años5años14 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-14.jpg";
import actividad2años5años15 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-15.jpg";
import actividad2años5años16 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-16.jpg";
import actividad2años5años17 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-17.jpg";
import actividad2años5años18 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-18.jpg";
import actividad2años5años19 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-19.jpg";
import actividad2años5años20 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-20.jpg";
import actividad2años5años21 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-21.jpg";
import actividad2años5años22 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-22.jpg";
import actividad2años5años23 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-23.jpg";
import actividad2años5años24 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-24.jpg";
import actividad2años5años25 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-25.jpg";
import actividad2años5años26 from "../../../assets/products/actividades/2-5-años/2-5-años-actividad-26.jpg";

const Actividades = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 450,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  return (
    <>
      <h2>
        <span className="fontDiverlibros">Actividades</span>
      </h2>

      <div className="activities">
        <div className="act act1">
          <div>
            <h3 className="activities__title">de 6 a 18 meses</h3>
          </div>
          <Slider {...settings} className="slider">
            <div>
              <img
                src={actividad6meses18meses1}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses2}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses3}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses4}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses5}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses6}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses7}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses8}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses9}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses10}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses11}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses12}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses13}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses14}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses15}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses16}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses17}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses18}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses19}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses20}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses21}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses22}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses23}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses24}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses25}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses26}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses27}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses28}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses29}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses30}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses31}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses32}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses33}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses34}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses35}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses36}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses37}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses38}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses39}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad6meses18meses40}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
          </Slider>
        </div>

        <div className="act act2">
          <div>
            <h3 className="activities__title">de 18 meses a 2 años</h3>
          </div>
          <Slider {...settings} className="slider">
            <div>
              <img
                src={actividad18meses2años1}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años2}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años3}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años4}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años5}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años6}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años7}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años8}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años9}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años10}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años11}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años12}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años13}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años14}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años15}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años16}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años17}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años18}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años19}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años20}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años21}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años22}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años23}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años24}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años25}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años26}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años27}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años28}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años29}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años30}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años31}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad18meses2años32}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
          </Slider>
        </div>

        <div className="act act3">
          <div>
            <h3 className="activities__title">de 2 a 5 años</h3>
          </div>
          <Slider {...settings} className="slider">
            <div>
              <img
                src={actividad2años5años1}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años2}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años3}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años4}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años5}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años6}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años7}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años8}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años9}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años10}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años11}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años12}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años13}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años14}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años15}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años16}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años17}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años18}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años19}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años20}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años21}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años22}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años23}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años24}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años25}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={actividad2años5años26}
                alt="Foto de actividad para 6 a 18 meses"
                className="slider__img"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un mini-Diverlibro?</h3>
        <ol className="product__order--list">
          <li>Rellena el formulario con las características básicas.</li>
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
