import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import CatalogList from "../catalog/CatalogList";
import Testimonials from "./testimonials/Testimonials";
import "./Home.scss";

import photoNuriaDominguez from "../../../assets/nuria/nuria-dominguez-playa-diverlibro.jpg";

function Home() {
  return (
    <>
      <Hero />
      <div className="section products">
        <h3 className="section__header">
          <span className="fontDiverlibros">Diverlibros</span> es la marca con
          la que aprender jugando
        </h3>
        <CatalogList />
      </div>

      <Testimonials />

      <div className="section who">
        <h3 className="section__header">
          ¿Quién está detrás de{" "}
          <span className="fontDiverlibros">Diverlibros</span>?
        </h3>
        <div className="who__container">
          <div className="who__section">
            <img
              src={photoNuriaDominguez}
              alt="Nuria Domínguez - Creadora de Diverlibro"
              className="who__photo"
              title="Foto de Nuria Domínguez"
              aria-label="Logotipo de Diverlibros"
            />
          </div>
          <div className="who__section">
            <p className="who__description">
              Hola, me llamo <strong>Nuria Domínguez</strong> y soy la creadora,
              diseñadora y artesana de <strong>Diverlibros</strong>.
              <br />
              <br />
              Un día mis hijos llevaban más tiempo del que me gustaría viendo la
              tele (quién no se ha visto en estas). Entonces me asaltó una
              pregunta:{" "}
              <i>
                {" "}
                “
                <u>
                  Cuando sean mayores, ¿qué recuerdos tendrán de su infancia?
                </u>
                ”
              </i>
              <br />
              Yo quería que sus recuerdos estuvieran llenos de momentos de juego
              en familia, de historias inventadas y juguetes físicos, más allá
              de las pantallas. Empecé a leer sobre pedagogía a través del juego
              y sobre métodos alternativos de enseñanza y entretenimiento.
              <br />
              <br />
              Este fue el punto de partida para crear esto que estás viendo
              ahora:
              <br />
              <strong>
                Diverlibros, productos sensoriales que personalizo al gusto de
                personas como tú, que quieren un regalo especial para sus
                peques.
              </strong>
              <br />
              <br />
              Libros, calendarios, cuadros personalizados… en total ya son más
              de 70 niños y niñas los que están fomentando su creatividad, sus
              habilidades psicomotrices y más, todo mientras juegan.
            </p>
          </div>
        </div>
        <div>
          <strong>¿Tú también quieres regalar diversión?</strong>
          <br />
          <br />
          <Link to="/catalogo">
            <a name="link-catalog" title="Ir a Catálogo" className="button">
              Sí, llévame al catálogo
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
