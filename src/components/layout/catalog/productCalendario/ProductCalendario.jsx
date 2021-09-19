import React from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import "../Product.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import calendario1 from "../../../../assets/products/calendarios/foto-calendario-personalizado-1.jpg";
import calendario2 from "../../../../assets/products/calendarios/foto-calendario-personalizado-2.jpg";
import calendario3 from "../../../../assets/products/calendarios/foto-calendario-personalizado-3.jpg";
import calendario4 from "../../../../assets/products/calendarios/foto-calendario-personalizado-4.jpg";
import calendario5 from "../../../../assets/products/calendarios/foto-calendario-personalizado-5.jpg";

const ProductCalendario = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <h2>
        <span className="fontDiverlibros">
          Calendario o Panel de Buenos Días
        </span>
      </h2>

      <div className="product__container">
        <div className="product__section">
          <AutoplaySlider
            className="slider"
            animation="foldOutAnimation"
            cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
            bullets={true}
            buttons={true}
            play={true}
            interval={5000}
            cancelOnInteraction={false}
          >
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
          </AutoplaySlider>

          <br />

          <TableContainer className="product__list">
            <Table>
              <TableBody>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Edad:</span>
                  </TableCell>
                  <TableCell>de 3 a 7 años aprox.</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Tamaño:</span>
                  </TableCell>
                  <TableCell>60 x 40 cm</TableCell>
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
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un calendario?</h3>
        <ol className="product__order--list">
          <li>Contáctame por email, teléfono o WhatsApp</li>
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
