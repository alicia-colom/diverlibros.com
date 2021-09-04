import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductMiniDiverlibro = () => {
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
        <span className="fontDiverlibros">Mini Diverlibros</span>
      </h2>

      <div className="product__container">
        <Slider {...settings} className="product__section slider">
          <div>
            <img
              src=""
              alt="Foto de mini Diverlibro personalizado"
              className="slider__img"
            />
          </div>
        </Slider>

        <div className="product__section">
          <div className="product__text">
            <h3 className="product__text--title">
              Pequeñas dosis de gran diversión
            </h3>
            <p className="product__text--description">
              Este libro sensorial de fieltro tiene un diseño predefinido con
              seis actividades fijas.
              <br />
              <br />
              Personalizo la portada con el nombre del niño o la niña y un
              dibujo, animal, personaje u objeto que tú elijas.
            </p>

            <ul className="product__list">
              <li className="product__list--item">
                <span className="product__list--title">Edad:</span> diferentes
                modelos entre los 6 meses y los 5 años
              </li>
              <li className="product__list--item">
                <span className="product__list--title">Tamaño:</span> 20x18 cm
              </li>
              <li>
                Acabado: terminaciones cosidas a máquina, páginas interiores
                cosidas a la portada y cierre con solapa y velcro
              </li>
              <li className="product__list--item">
                <span className="product__list--title">Precio:</span> 25 euros
                (letras del nombre cosidas a la portada) 29 euros (letras
                móviles con velcro)
              </li>
              <li className="product__list--item">
                <span className="product__list--title">
                  Tiempo de confección:
                </span>{" "}
                1 semana
              </li>
            </ul>
            <small>
              * ¿Quieres un libro sensorial aún más personalizado? Entonces
              probablemente te interese echar un vistazo a los{" "}
              <Link to="/contacto">
                <a name="link-contact" title="Ir a Contacto">
                  <strong> Diverlibros</strong>
                </a>
              </Link>
              , con un diseño y actividades 100% personalizables a los gustos
              del peque.
            </small>
          </div>
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

export default ProductMiniDiverlibro;
