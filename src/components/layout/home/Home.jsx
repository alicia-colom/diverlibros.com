import React from "react";
import Hero from "../hero/Hero";
import { makeStyles, Divider, Grid, Paper } from "@material-ui/core";

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
      <h3>Diverlibros es la marca con la que aprender jugando</h3>
      <Grid container spacing={3} className={cls.container}>
        <Grid item xs={6} sm={3}>
          <Paper className={cls.paper}>
            <h4>DIVERLIBROS</h4>
            <p>Sensoriales, artesanales y personalizables al detalle</p>
            <button>Ir a Diverlibros</button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={cls.paper}>
            <h4>MINI-DIVERLIBROS</h4>
            <p>Pequeñas dosis de gran diversión</p>
            <button>Ir a Mini-Diverlibros</button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={cls.paper}>
            <h4>CALENDARIO O PANEL DE LOS BUENOS DÍAS</h4>
            <p>Un ritual de juego y aprendizaje todas las mañanas</p>
            <button>Ir a Calendario</button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={cls.paper}>
            <h4>CUADROS PERSONALIZADOS</h4>
            <p>Un recuerdo con su nombre y su motivo favorito</p>
            <button>Ir a Cuadros</button>
          </Paper>
        </Grid>
      </Grid>
      <Divider />
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
      <Divider />
      <h3>¿Quién está detrás de Diverlibros?</h3>
      <div>
        <img src="" alt="Foto de Nuria" />
        <div>
          <p>
            Hola, me llamo Nuria y soy la creadora, diseñadora y artesana de
            Diverlibros. Un día mis hijos llevaban más tiempo del que me
            gustaría viendo la tele (quién no se ha visto en estas). Entonces me
            asaltó una pregunta: “Cuando sean mayores, ¿qué recuerdos tendrán de
            su infancia?” Yo quería que sus recuerdos estuvieran llenos de
            momentos de juego en familia, de historias inventadas y juguetes
            físicos, más allá de las pantallas. Empecé a leer sobre pedagogía a
            través del juego y sobre métodos alternativos de enseñanza y
            entretenimiento. Este fue el punto de partida para crear esto que
            estás viendo ahora: Diverlibros, productos sensoriales que
            personalizo al gusto de personas como tú, que quieren un regalo
            especial para sus peques. Libros, calendarios, cuadros
            personalizados… en total ya son más de 70 niños y niñas los que
            están fomentando su creatividad, sus habilidades psicomotrices y
            más, todo mientras juegan. ¿Tú también quieres regalar diversión?
          </p>
          <button>Sí, llévame al catálogo</button>
        </div>
      </div>
    </>
  );
}

export default Home;
