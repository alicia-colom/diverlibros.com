import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import cuadro1 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-1.jpg";
import cuadro2 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-2.jpg";
import cuadro3 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-3.jpg";
import cuadro4 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-4.jpg";
import cuadro5 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-5.jpg";
import cuadro6 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-6.jpg";
import cuadro7 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-7.jpg";
import cuadro8 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-8.jpg";
import cuadro9 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-9.jpg";
import cuadro10 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-10.jpg";
import cuadro11 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-11.jpg";
import cuadro12 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-12.jpg";
import cuadro13 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-13.jpg";
import cuadro14 from "../../../../assets/products/cuadros/foto-cuadro-personalizado-14.jpg";

const ProductCuadro = () => {
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
        <span className="fontDiverlibros">Cuadros personalizados</span>
      </h2>

      <div className="product__container">
        <div className="product__section">
          <Slider {...settings} className="product__section slider">
            <div>
              <img
                src={cuadro1}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro2}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro3}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro4}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro5}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro6}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro7}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro8}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro9}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro10}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro11}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro12}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro13}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={cuadro14}
                alt="Foto de cuadro personalizado"
                className="slider__img"
              />
            </div>
          </Slider>
        </div>

        <div className="product__section">
          <div className="product__text">
            <h3 className="product__text--title">
              Un recuerdo con su nombre y su motivo favorito
            </h3>
            <p className="product__text--description">
              Este cuadro de fieltro es perfecto para decorar la habitación del
              peque.
              <br />
              <br />
              Diseño el cuadro con el nombre del niño o la niña y con el motivo
              que prefieras: su animal favorito, un objeto o un personaje.
            </p>
          </div>
          <br />
          <TableContainer className="product__list">
            <Table>
              <TableBody>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Tamaño:</span>
                  </TableCell>
                  <TableCell>32 x 24 cm</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Precio:</span>
                  </TableCell>
                  <TableCell>28 euros</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">
                      Tiempo de confección:
                    </span>
                  </TableCell>
                  <TableCell>1 semana</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un cuadro personalizado?</h3>
        <ol className="product__order--list">
          <li>Rellena el formulario con las características que quieres</li>
          <li>
            En un máximo de 24 horas me pongo en contacto contigo para concretar
            los detalles de tu cuadro
          </li>
        </ol>
        <Link to="/contacto">
          <a name="link-contact" title="Ir a Contacto" className="button">
            Compra ya tu Cuadro
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductCuadro;
