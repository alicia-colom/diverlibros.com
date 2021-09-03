import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import "./Home.scss";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import photoProductDiverlibro from "../../../assets/products/foto-producto-lorem-ipsum.jpg";
import photoProductMiniDiverlibro from "../../../assets/products/foto-producto-lorem-ipsum.jpg";
import photoProductCalendario from "../../../assets/products/foto-producto-lorem-ipsum.jpg";
import photoProductCuadro from "../../../assets/products/foto-producto-lorem-ipsum.jpg";
import testimony1 from "../../../assets/testimonials/testimonio-home-1.jpg";
import testimony2 from "../../../assets/testimonials/testimonio-home-2.jpg";
import testimony3 from "../../../assets/testimonials/testimonio-home-3.jpg";
import testimony4 from "../../../assets/testimonials/testimonio-home-4.jpg";
import testimony5 from "../../../assets/testimonials/testimonio-home-5.jpg";
import testimony6 from "../../../assets/testimonials/testimonio-home-6.jpg";
import testimony7 from "../../../assets/testimonials/testimonio-home-7.jpg";
import testimony8 from "../../../assets/testimonials/testimonio-home-8.jpg";
import photoNuriaDominguez from "../../../assets/nuria-dominguez-perfil-diverlibro.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paperProduct: {
    backgroundColor: "#40DEBF",
    height: theme.spacing(60),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperTestimony: {
    backgroundColor: "transparent",
    height: theme.spacing(60),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Home() {
  const cls = useStyles();

  return (
    <>
      <Hero />
      <div className="section products">
        <h3>Diverlibros es la marca con la que aprender jugando</h3>
        <Grid container spacing={3} className={cls.container}>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperProduct}>
              <h4 className="products__title">DIVERLIBROS</h4>
              <p className="products__description">
                Sensoriales, artesanales y personalizables al detalle
              </p>
              <Link to="/catalogo">
                <img
                  src={photoProductDiverlibro}
                  alt="Producto Diverlibro"
                  className="products__img"
                  title="Ir a Diverlibros"
                  aria-label="Imagen del producto Diverlibro de Diverlibro"
                />
              </Link>
              <Link to="/catalogo">
                <a
                  name="link-diverlibros"
                  title="Ir a Diverlibros"
                  className="button"
                >
                  Ir a Diverlibros
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperProduct}>
              <h4 className="products__title">MINI-DIVERLIBROS</h4>
              <p className="products__description">
                Pequeñas dosis de gran diversión
              </p>
              <Link to="/catalogo">
                <img
                  src={photoProductMiniDiverlibro}
                  alt="Producto Mini Diverlibros"
                  className="products__img"
                  title="Ir a Mini Diverlibros"
                  aria-label="Imagen del producto Mini Diverlibros Diverlibro"
                />
              </Link>
              <Link to="/catalogo">
                <a
                  name="link-mini-diverlibros"
                  title="Ir a Mini Diverlibros"
                  className="button"
                >
                  Ir a Mini-Diverlibros
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperProduct}>
              <h4 className="products__title">CALENDARIO</h4>
              <p className="products__description">
                Un ritual de juego y aprendizaje todas las mañanas
              </p>
              <Link to="/catalogo">
                <img
                  src={photoProductCalendario}
                  alt="Producto Calendario"
                  className="products__img"
                  title="Ir a Calendario"
                  aria-label="Imagen del producto Calendario de Diverlibro"
                />
              </Link>
              <Link to="/catalogo">
                <a
                  name="link-calendar"
                  title="Ir a Calendario"
                  className="button"
                >
                  Ir a Calendario
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperProduct}>
              <h4 className="products__title">CUADROS</h4>
              <p className="products__description">
                Un recuerdo con su nombre y su motivo favorito
              </p>
              <Link to="/catalogo">
                <img
                  src={photoProductCuadro}
                  alt="Producto Cuadros"
                  className="products__img"
                  title="Ir a Cuadros"
                  aria-label="Imagen del producto Cuadros de Diverlibro"
                />
              </Link>
              <Link to="/catalogo">
                <a name="link-about" title="Ir a Cuadros" className="button">
                  Ir a Cuadros
                </a>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="section testimonials">
        <h3>Estas son algunas de las impresiones que deja Diverlibros</h3>
        <Grid container spacing={3} className={cls.container}>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <p className="testimonials__quote">Testimonio #1</p>
              <img
                src={testimony1}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
              <p className="testimonials__quote--author">@nombre-cliente</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <p className="testimonials__quote">Testimonio #2</p>
              <img
                src={testimony2}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
              <p className="testimonials__quote--author">@nombre-cliente</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <p className="testimonials__quote">Testimonio #3</p>
              <img
                src={testimony3}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
              <p className="testimonials__quote--author">@nombre-cliente</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paperTestimony}>
              <p className="testimonials__quote">Testimonio #4</p>
              <img
                src={testimony4}
                alt="Testimonio de clientes sobre Diverlibro"
                className="testimonials__img"
                title="Testimonio de clientes"
                aria-label="Testimonio de clientes sobre Diverlibro"
              />
              <p className="testimonials__quote--author">@nombre-cliente</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="section who">
        <h3>¿Quién está detrás de Diverlibros?</h3>
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
