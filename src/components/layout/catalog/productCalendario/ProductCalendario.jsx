import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import calendario1 from "../../../../assets/products/calendarios/foto-calendario-personalizado-1.jpg";
import calendario2 from "../../../../assets/products/calendarios/foto-calendario-personalizado-2.jpg";
import calendario3 from "../../../../assets/products/calendarios/foto-calendario-personalizado-3.jpg";
import calendario4 from "../../../../assets/products/calendarios/foto-calendario-personalizado-4.jpg";
import calendario5 from "../../../../assets/products/calendarios/foto-calendario-personalizado-5.jpg";

const ProductCalendario = () => {
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
        <span className="fontDiverlibros">
          Calendario o Panel de Buenos Días
        </span>
      </h2>

      <div className="product__container">
        <Slider {...settings} className="product__section slider">
          <div>
            <img
              src={calendario1}
              alt="Foto de calendario personalizado"
              className="slider__img"
            />
          </div>
          <div>
            <img
              src={calendario2}
              alt="Foto de calendario personalizado"
              className="slider__img"
            />
          </div>
          <div>
            <img
              src={calendario3}
              alt="Foto de calendario personalizado"
              className="slider__img"
            />
          </div>
          <div>
            <img
              src={calendario4}
              alt="Foto de calendario personalizado"
              className="slider__img"
            />
          </div>
          <div>
            <img
              src={calendario5}
              alt="Foto de calendario personalizado"
              className="slider__img"
            />
          </div>
        </Slider>

        <div className="product__section">
          <div className="product__text">
            <h3 className="product__text--title">
              Un ritual de juego y aprendizaje todas las mañanas
            </h3>
            <p className="product__text--description">
              ¿Sabe tu peque qué día de la semana es? ¿Cuáles son las estaciones
              del año? ¿Está afianzando ahora los conceptos de ayer, hoy y
              mañana?
              <br />
              <br />
              Es muy recomendable trabajar los conceptos de espacio y tiempo con
              los niños. Para ellos es importante sentir una rutina, saber qué
              día es, qué acontecimientos van a ocurrir pronto, reconocer el
              tiempo que hace...
            </p>
            <p className="product__text--description">
              <i>
                Este calendario de fieltro, también llamado panel de los buenos
                días, se basa en el método Montessori y es perfecto para que los
                niños aprendan a manejar el concepto espacio-temporal de forma
                práctica y divertida
              </i>
            </p>
            <p className="product__text--description">
              Lo he diseñado para que los peques interactúen con él y de forma
              empírica, aplicada al día a día, empiecen a situar los días de la
              semana, los meses del año, las estaciones y las fechas señaladas,
              como las vacaciones, la Navidad o su cumpleaños.
              <br />
              <br />
              Personalizo algunos detalles, por ejemplo puedo marcar el mes del
              cumpleaños del peque o alguna fecha especial de la familia.
              <br />
              <br />
              Este calendario está dirigido tanto a familias como a colegios o
              centros educativos.
            </p>
          </div>

          <ul className="product__list">
            <li className="product__list--item">
              <span className="product__list--title">Edad:</span>
              aproximadamente de 3 a 7 años
            </li>
            <li className="product__list--item">
              <span className="product__list--title">Tamaño:</span>60x40 cm
            </li>
            <li className="product__list--item">
              <span className="product__list--title">Precio:</span>25 euros
            </li>
            <li className="product__list--item">
              <span className="product__list--title">
                Tiempo de confección:
              </span>
              1 semana
            </li>
          </ul>
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un calendario?</h3>
        <ol className="product__order--list">
          <li>Rellena el formulario</li>
          <li>
            En un máximo de 24 horas me pongo en contacto contigo para concretar
            los detalles de tu calendario
          </li>
        </ol>
        <Link to="/contacto">
          <a name="link-contact" title="Ir a Contacto" className="button">
            Reserva tu Calendario
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductCalendario;
