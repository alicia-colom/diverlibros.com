import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import minidiverlibroDinos1 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-dinos-1.jpg";
import minidiverlibroDinos2 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-dinos-2.jpg";
import minidiverlibroDinos3 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-dinos-3.jpg";
import minidiverlibroDinos4 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-dinos-4.jpg";
import minidiverlibroSemanaSanta5 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-semana-santa-1.jpg";
import minidiverlibroSemanaSanta6 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-semana-santa-2.jpg";
import minidiverlibroSemanaSanta7 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-semana-santa-3.jpg";
import minidiverlibroSemanaSanta8 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-semana-santa-4.jpg";
import minidiverlibroSantJordi9 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-1.jpg";
import minidiverlibroSantJordi10 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-2.jpg";
import minidiverlibroSantJordi11 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-3.jpg";
import minidiverlibroSantJordi12 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-4.jpg";
import minidiverlibroSantJordi13 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-5.jpg";
import minidiverlibroSantJordi14 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-6.jpg";
import minidiverlibroSantJordi15 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-7.jpg";
import minidiverlibroSantJordi16 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-8.jpg";
import minidiverlibroSantJordi17 from "../../../../assets/products/mini-diverlibros/foto-mini-diverlibro-sant-jordi-9.jpg";

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
        <div className="product__section">
          <Slider {...settings} className="product__section slider">
            <div>
              <img
                src={minidiverlibroDinos1}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroDinos2}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroDinos3}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroDinos4}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSemanaSanta5}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSemanaSanta6}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSemanaSanta7}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSemanaSanta8}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi9}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi10}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi11}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi12}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi13}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi14}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi15}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi16}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={minidiverlibroSantJordi17}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
          </Slider>
          <br />
          <TableContainer className="product__list">
            <Table>
              <TableBody>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Edad:</span>
                  </TableCell>
                  <TableCell>
                    diferentes modelos entre los 6 meses y los 5 años
                  </TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Tamaño:</span>
                  </TableCell>
                  <TableCell>20x18 cm</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">
                      Acabado industrial:
                    </span>
                  </TableCell>
                  <TableCell>
                    terminaciones cosidas a máquina, páginas interiores cosidas
                    a la portada y cierre con solapa y velcro
                  </TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Precio:</span>
                  </TableCell>
                  <TableCell>
                    25 euros (letras del nombre cosidas a la portada) <br /> 29
                    euros (letras móviles con velcro)
                  </TableCell>
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

          <Link to={"/catalogo/actividades"}>
            <a
              name="link-actividades"
              title="Ir a actividades"
              className="product__buttonActividades"
            >
              Ver todas las actividades
            </a>
          </Link>
        </div>

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

          <br />
          <Divider />
          <br />

          <div className="product__text">
            <h4 className="product__text--title">PORTADAS</h4>
            <ul>
              <li>
                <h5>LETRAS FIJAS</h5>
                <p className="product__text--description">
                  Están cosidas a la portada, opción recomendada para menores de
                  3 años ...... <strong>incluido en el precio</strong>
                </p>
              </li>
              <li>
                <h5>LETRAS MÓVILES</h5>
                <p className="product__text--description">
                  Se pegan con velcro para que el peque aprenda a formar su
                  nombre ...... <strong>+ 4 euros</strong>
                </p>
              </li>
            </ul>

            <h4 className="product__text--title">MINI DIVERLIROS TEMÁTICOS</h4>
            <ul>
              <li>
                <h5>SEMANA SANTA</h5>
                <p className="product__text--description">
                  ¿Qué color tiene la túnica de los nazarenos? ¿Puedes unir las
                  paradas de la cofradía siguiendo el orden de los números? Y
                  cuidado con el botón del traje del trompetero, ¡se ha
                  desabrochado!
                  <br />
                  <br />
                  Este mini-Diverlibro sumerge a los más pequeños en la pasión
                  de la Semana Santa mediante actividades divertidas con las que
                  entrenan sus habilidades psicomotrices.
                </p>
              </li>
              <li>
                <h5>DINOSAURIOS</h5>
                <p className="product__text--description">
                  No hay niño que no sienta fascinación por estos animales
                  prehistóricos.
                  <br />
                  <br />
                  Con este mini-Diverlibro el peque aprende a contar huevos de
                  tiranosaurio, repasa los colores persiguiendo huellas
                  prehistóricas y une las piezas de un puzzle para formar un
                  diplodocus.
                </p>
              </li>

              <li>
                <h5>SANT JORDI</h5>
                <p className="product__text--description">
                  Juega al tres en raya con dragones y caballeros, guía a Sant
                  Jordi hasta el castillo de la princesa y cuenta las púas del
                  dragón mientras duerme.
                  <br />
                  <br />
                  La leyenda de Sant Jordi es el escenario perfecto para que los
                  peques aprendan mientras se divierten haciendo las actividades
                  de este mini-Diverlibro.
                </p>
              </li>
            </ul>
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
