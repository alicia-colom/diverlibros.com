import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.scss";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import photoProductDiverlibro from "../../../assets/products/product-main-diverlibro.jpg";
import photoProductMiniDiverlibro from "../../../assets/products/product-main-minidiverlibro.jpg";
import photoProductCalendario from "../../../assets/products/product-main-calendario.jpg";
import photoProductCuadro from "../../../assets/products/product-main-cuadro.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: "0.8rem",
    textAlign: "center",
  },
  paperProduct: {
    backgroundColor: "#dddddd",
    height: "22rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "1rem",
  },
}));

const Catalog = () => {
  const cls = useStyles();

  return (
    <main className="catalog__container">
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
              Pequeñas dosis de con la misma gran diversión
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
    </main>
  );
};

export default Catalog;
