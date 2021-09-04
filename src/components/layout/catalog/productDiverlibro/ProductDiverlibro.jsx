import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDiverlibro = () => {
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
        <span className="fontDiverlibros">Diverlibros</span>
      </h2>

      <div className="product__container">
        <Slider {...settings} className="product__section slider">
          <div>
            <img
              src=""
              alt="Foto de Diverlibro personalizado"
              className="slider__img"
            />
          </div>
        </Slider>

        <div className="product__section">
          <div className="product__text">
            <h3 className="product__text--title">
              Un libro sensorial artesanal y personalizable al detalle
            </h3>
            <p className="product__text--description">
              ¡El producto estrella! Este libro sensorial de fieltro es
              completamente personalizable, desde la portada hasta cada una de
              las actividades. Me adapto a la edad del niño o la niña, así como
              a sus gustos e inquietudes.
              <br />
              <br />
              Elige las actividades que más te gusten e incluye a los
              personajes, animales, objetos y dibujos preferidos del peque. Todo
              queda integrado en el desarrollo de las actividades.
              <br />
              <br />
              Si lo prefieres, también puedo confeccionar las actividades desde
              cero con tus indicaciones.
            </p>
            <p className="product__text--description">
              <i>
                Con este Diverlibro tu peque tendrá un libro sensorial único en
                el mundo hecho a mano especialmente para él o ella
              </i>
            </p>

            <ul className="product__list">
              <li className="product__list--item">
                <span className="product__list--title">Edad:</span> adaptable de
                6 meses a 5 años
              </li>
              <li className="product__list--item">
                <span className="product__list--title">Tamaño:</span> 24x24 cm
              </li>
              <li className="product__list--item">
                <span className="product__list--title">Precio:</span> a partir
                de 30 euros, en función de las características y el número de
                páginas
              </li>
              <li className="product__list--item">
                <span className="product__list--title">
                  Tiempo de confección:
                </span>{" "}
                2-3 semanas
              </li>
            </ul>
            <small>
              * Los Diverlibros están 100% hechos a mano y personalizados al
              detalle. Por eso necesito entre 2 y 3 semanas para elaborar tu
              libro y que quede perfecto. ¿No puedes esperar tanto? Echa un
              vistazo a los{" "}
              <Link to="/contacto">
                <a name="link-contact" title="Ir a Contacto">
                  <strong> Mini Diverlibros</strong>
                </a>
              </Link>{" "}
              con actividades prediseñadas.
            </small>
          </div>
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un libro sensorial personalizado?</h3>
        <ol className="product__order--list">
          <li>Rellena el formulario con las características básicas. </li>
          <li>
            En un máximo de 24 horas me pongo en contacto contigo para entrar en
            detalle sobre la personalización y diseñar juntos un Diverlibro
            único.
          </li>
        </ol>
        <Link to="/contacto">
          <a name="link-contact" title="Ir a Contacto" className="button">
            No te quedes sin tu Diverlibro
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductDiverlibro;
