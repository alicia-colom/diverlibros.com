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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import diverlibroAnillas1 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-1.jpg";
import diverlibroAnillas2 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-2.jpg";
import diverlibroAnillas3 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-3.jpg";
import diverlibroAnillas4 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-4.jpg";
import diverlibroAnillas5 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-5.jpg";
import diverlibroAnillas6 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-6.jpg";
import diverlibroAnillas7 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-7.jpg";
import diverlibroAnillas8 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-8.jpg";
import diverlibroAnillas9 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-9.jpg";
import diverlibroAnillas10 from "../../../../assets/products/diverlibros/foto-diverlibro-anillas-personalizado-10.jpg";
import diverlibroArtesanal1 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-1.jpg";
import diverlibroArtesanal2 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-2.jpg";
import diverlibroArtesanal3 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-3.jpg";
import diverlibroArtesanal4 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-4.jpg";
import diverlibroArtesanal5 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-5.jpg";
import diverlibroArtesanal6 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-6.jpg";
import diverlibroArtesanal7 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-7.jpg";
import diverlibroArtesanal8 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-8.jpg";
import diverlibroArtesanal9 from "../../../../assets/products/diverlibros/foto-diverlibro-artesanal-personalizado-9.jpg";
import diverlibroIndustrial1 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-1.jpg";
import diverlibroIndustrial2 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-2.jpg";
import diverlibroIndustrial3 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-3.jpg";
import diverlibroIndustrial4 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-4.jpg";
import diverlibroIndustrial5 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-5.jpg";
import diverlibroIndustrial6 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-6.jpg";
import diverlibroIndustrial7 from "../../../../assets/products/diverlibros/foto-diverlibro-industrial-personalizado-7.jpg";

const ProductDiverlibro = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <h2>
        <span className="fontDiverlibros">Diverlibros</span>
      </h2>

      <div className="product__container">
        <div className="product__section">
          <AutoplaySlider
            animation="foldOutAnimation"
            cssModule={[AwesomeSliderStyles, CoreStyles, AnimationStyles]}
            bullets={true}
            buttons={true}
            play={true}
            interval={5000}
            cancelOnInteraction={false}
            className="slider"
          >
            <div>
              <img
                src={diverlibroAnillas1}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas2}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas3}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas4}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas5}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas6}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas7}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas8}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas9}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroAnillas10}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal1}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal2}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal3}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal4}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal5}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal6}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal7}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal8}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroArtesanal9}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial1}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial2}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial3}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial4}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial5}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial6}
                alt="Foto de Diverlibro personalizado"
                className="slider__img"
              />
            </div>
            <div>
              <img
                src={diverlibroIndustrial7}
                alt="Foto de Diverlibro personalizado"
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
                  <TableCell>adaptable de 6 meses a 5 años aprox.</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Tamaño:</span>
                  </TableCell>
                  <TableCell>24 x 24 cm</TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">Precio:</span>
                  </TableCell>
                  <TableCell>
                    a partir de 30 euros, en función de las características y el
                    número de páginas
                  </TableCell>
                </TableRow>
                <TableRow className="product__list--item">
                  <TableCell component="th" scope="row">
                    <span className="product__list--title">
                      Tiempo de confección:
                    </span>
                  </TableCell>
                  <TableCell>2-3 semanas</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

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

            <br />
            <p className="product__text--small">
              * Los Diverlibros están 100% hechos a mano y personalizados al
              detalle. Por eso necesito entre 2 y 3 semanas para elaborar tu
              libro y que quede perfecto. ¿No puedes esperar tanto? Echa un
              vistazo a los{" "}
              <Link to="/catalogo/mini-diverlibro">
                <a name="link-minidiverlibro" title="Ir a Mini Diverlibro">
                  <strong> Mini Diverlibros</strong>
                </a>
              </Link>{" "}
              con actividades prediseñadas.
            </p>
          </div>

          <Link
            to="/catalogo/actividades"
            className="product__buttonActividades"
          >
            <a
              name="link-actividades"
              title="Ir a actividades"
              // className="product__buttonActividades"
            >
              Ver todas las actividades
            </a>
          </Link>

          <div className="product__text">
            <h4 className="product__text--title">ACABADOS</h4>
            <ul>
              <li>
                <h5>ACABADO INDUSTRIAL</h5>
                <p className="product__text--description">
                  Páginas con terminaciones y acabados cosidos a máquina. Cierre
                  con solapa y velcro. Encuadernación fija: páginas interiores
                  cosidas a la portada 8 páginas con actividades más portada y
                  contraportada.
                  <br />
                  <i>El perfil clásico ............ </i>
                  <strong>40 euros</strong>
                </p>
              </li>
              <li>
                <h5>ACABADO ARTESANAL</h5>
                <p className="product__text--description">
                  Páginas con terminaciones y acabados cosidos a mano. Cierre
                  con solapa y velcro. Encuadernación fija: páginas interiores
                  cosidas a la portada 8 páginas con actividades más portada y
                  contraportada.
                  <br />
                  <i>El perfil con punto de festón ............ </i>
                  <strong>46 euros</strong>
                </p>
              </li>
              <li>
                <h5>ACABADO ANILLADO</h5>
                <p className="product__text--description">
                  Páginas con terminaciones y acabados cosidos a máquina. Cierre
                  con solapa y velcro. Encuadernación móvil: páginas unidas por
                  anillas, así puedes cambiar el orden de las actividades, sacar
                  alguna actividad para llevar en el bolso o añadir más páginas
                  con actividades en el futuro Mínimo de 4 páginas con
                  actividades más portada y contraportada.
                  <br />
                  <i>El Diverlibro que crece con el peque ............ </i>
                  <strong>a partir de 30 euros</strong>
                </p>
              </li>
            </ul>

            <br />
            <Divider />

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
          </div>
        </div>
      </div>

      <div className="product__order">
        <h3>¿Quieres pedir un libro sensorial personalizado?</h3>
        <ol className="product__order--list">
          <li>Envíame un correo o WhatsApp con las características básicas que quieres</li>
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
