import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import "./Home.scss";
import { makeStyles, Divider, Grid, Paper } from "@material-ui/core";
import fotoNuriaDominguez from "../../../assets/nuria-dominguez-perfil-diverlibro.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function Home() {
  const cls = useStyles();

  return (
    <>
      <Hero />
      <Divider />
      <div className="products">
        <h3>Diverlibros es la marca con la que aprender jugando</h3>
        <Grid container spacing={3} className={cls.container}>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <h4>DIVERLIBROS</h4>
              <p>Sensoriales, artesanales y personalizables al detalle</p>
              <Link to="/catalogo">
                <a
                  name="link-diverlibros"
                  title="Ir a Diverlibros"
                  className="main__button"
                >
                  Ir a Diverlibros
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <h4>MINI-DIVERLIBROS</h4>
              <p>Pequeñas dosis de gran diversión</p>
              <Link to="/catalogo">
                <a
                  name="link-mini-diverlibros"
                  title="Ir a Mini Diverlibros"
                  className="main__button"
                >
                  Ir a Mini-Diverlibros
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <h4>CALENDARIO O PANEL DE LOS BUENOS DÍAS</h4>
              <p>Un ritual de juego y aprendizaje todas las mañanas</p>
              <Link to="/catalogo">
                <a
                  name="link-calendar"
                  title="Ir a Calendario"
                  className="main__button"
                >
                  Ir a Calendario
                </a>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <h4>CUADROS PERSONALIZADOS</h4>
              <p>Un recuerdo con su nombre y su motivo favorito</p>
              <Link to="/catalogo">
                <a
                  name="link-about"
                  title="Ir a Cuadros"
                  className="main__button"
                >
                  Ir a Cuadros
                </a>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className="testimonies">
        <h3>Estas son algunas de las impresiones que deja Diverlibros</h3>
        <p>
          Aquí añadir los pantallazos de testimonios, están en la carpeta con
          nombre “home-testimonio”, evitar los sliders
        </p>
        <Grid container spacing={3} className={cls.container}>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <p>Testimonio #1</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <p>Testimonio #2</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <p>Testimonio #3</p>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={cls.paper}>
              <p>Testimonio #4</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className="who">
        <h3>¿Quién está detrás de Diverlibros?</h3>
        <div className="who__container">
          <div>
            <img
              src={fotoNuriaDominguez}
              alt="Nuria Domínguez - Creadora de Diverlibro"
              className="who__photo"
              title="Foto de Nuria Domínguez"
              aria-label="Logotipo de Diveribros"
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
          <a name="link-catalog" title="Ir a Catálogo" className="main__button">
            Sí, llévame al catálogo
          </a>
        </Link>
      </div>
    </>
  );
}

export default Home;
