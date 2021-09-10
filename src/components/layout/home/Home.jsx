import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import CatalogList from "../catalog/CatalogList";
import "./Home.scss";
import { makeStyles, Grid, Paper } from "@material-ui/core";

// import testimony1 from "../../../assets/testimonials/testimonio-home-1.jpg";
import testimony2 from "../../../assets/testimonials/testimonio-home-2.jpg";
import testimony3 from "../../../assets/testimonials/testimonio-home-3.jpg";
import testimony4 from "../../../assets/testimonials/testimonio-home-4.jpg";
//import testimony5 from "../../../assets/testimonials/testimonio-home-5.jpg";
//import testimony6 from "../../../assets/testimonials/testimonio-home-6.jpg";
//import testimony7 from "../../../assets/testimonials/testimonio-home-7.jpg";
//import testimony8 from "../../../assets/testimonials/testimonio-home-8.jpg";
import testimony9 from "../../../assets/testimonials/testimonio-home-9.jpg";

import photoNuriaDominguez from "../../../assets/nuria-dominguez-perfil-diverlibro.jpg";

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    padding: "0.8rem",
    textAlign: "center",
  },
  paperTestimony: {
    //backgroundColor: "#727272",
    background:
      "radial-gradient(0 0, ellipse farthest-corner, #22C3A3 2%, #188F77 40%, #40DEBF)",
    boxShadow: "5px 8px 10px -5px rgba(17, 17, 17, 0.5)",
    borderRadius: "0.5rem",
    color: "#dddddd",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20vw",
    maxWidth: "13rem",
  },
}));

function Home() {
  const cls = useStyles();

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

      <div className="section testimonials">
        <h3 className="section__header">
          Estas son algunas de las impresiones que deja{" "}
          <span className="fontDiverlibros"> Diverlibros</span> :
        </h3>
        <Grid container spacing={3} className={cls.container}>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <h4 className="testimonials__author">Sira Brun</h4>
              <p className="testimonials__author--quote">
                Diverlibros y calendario para 3 niños de entre 2 y 5 años
              </p>
              <img
                src={testimony9}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <h4 className="testimonials__author">Mari Olivero Cobo</h4>
              <p className="testimonials__author--quote">
                Diverlibro para niño de 3 años
              </p>
              <img
                src={testimony2}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <h4 className="testimonials__author">Tami Santos</h4>
              <p className="testimonials__author--quote">
                Mini Diverlibro para 2 niñas de 1 año
              </p>
              <img
                src={testimony3}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <h4 className="testimonials__author">Mandy Sánchez Taura</h4>
              <p className="testimonials__author--quote">
                Diverlibro y cuadro personalizado para niña de 4 años
              </p>
              <img
                src={testimony4}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="section who">
        <h3 className="section__header">
          ¿Quién está detrás de{" "}
          <span className="fontDiverlibros">Diverlibros</span>?
        </h3>
        <div className="who__container">
          <div>
            <img
              src={photoNuriaDominguez}
              alt="Nuria Domínguez - Creadora de Diverlibro"
              className="who__photo"
              title="Foto de Nuria Domínguez"
              aria-label="Logotipo de Diverlibros"
            />
          </div>
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
              <u>Cuando sean mayores, ¿qué recuerdos tendrán de su infancia?</u>
              ”
            </i>
            <br />
            Yo quería que sus recuerdos estuvieran llenos de momentos de juego
            en familia, de historias inventadas y juguetes físicos, más allá de
            las pantallas. Empecé a leer sobre pedagogía a través del juego y
            sobre métodos alternativos de enseñanza y entretenimiento.
            <br />
            <br />
            Este fue el punto de partida para crear esto que estás viendo ahora:
            <br />
            <strong>
              Diverlibros, productos sensoriales que personalizo al gusto de
              personas como tú, que quieren un regalo especial para sus peques.
            </strong>
            <br />
            <br />
            Libros, calendarios, cuadros personalizados… en total ya son más de
            70 niños y niñas los que están fomentando su creatividad, sus
            habilidades psicomotrices y más, todo mientras juegan.
            <br />
            <br />
            <strong>¿Tú también quieres regalar diversión?</strong>
          </p>
        </div>
        <Link to="/catalogo">
          <a name="link-catalog" title="Ir a Catálogo" className="button">
            Sí, llévame al catálogo
          </a>
        </Link>
      </div>
    </>
  );
}

export default Home;
