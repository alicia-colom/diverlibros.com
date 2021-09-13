import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import "./Testimonials.scss";

// import testimony1 from "../../../../assets/testimonials/testimonio-home-1.jpg";
import testimony2 from "../../../../assets/testimonials/testimonio-home-2.jpg";
import testimony3 from "../../../../assets/testimonials/testimonio-home-3.jpg";
import testimony4 from "../../../../assets/testimonials/testimonio-home-4.jpg";
//import testimony5 from "../../../../assets/testimonials/testimonio-home-5.jpg";
//import testimony6 from "../../../../assets/testimonials/testimonio-home-6.jpg";
//import testimony7 from "../../../../assets/testimonials/testimonio-home-7.jpg";
//import testimony8 from "../../../../assets/testimonials/testimonio-home-8.jpg";
import testimony9 from "../../../../assets/testimonials/testimonio-home-9.jpg";

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    padding: "0.8rem",
    // textAlign: "center",
    // alignItems: "top",
    margin: "2rem 0",
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
    maxWidth: "14rem",
    minWidth: "14rem",
  },
}));

function Testimonials() {
  const cls = useStyles();

  return (
    <div className="section testimonials">
      <h3 className="section__header">
        Estas son algunas de las impresiones que deja{" "}
        <span className="fontDiverlibros"> Diverlibros</span>:
      </h3>
      <Grid
        container
        spacing={3}
        alignContent="center"
        className={cls.container}
      >
        <Grid item xs>
          <Paper className={cls.paperTestimony}>
            <h4 className="testimonials__author">Sira Brun</h4>
            <p className="testimonials__author--quote">Cuadros para niños</p>
            <img
              src={testimony9}
              alt="Testimonio de clientes sobre Diverlibro"
              className="testimonials__img"
              title="Testimonio de clientes"
              aria-label="Testimonio de clientes sobre Diverlibro"
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={cls.paperTestimony}>
            <h4 className="testimonials__author">Mari Olivero</h4>
            <p className="testimonials__author--quote">
              Diverlibro para 10 meses
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
        <Grid item xs>
          <Paper className={cls.paperTestimony}>
            <h4 className="testimonials__author">Tami Santos</h4>
            <p className="testimonials__author--quote">
              Dos Diverlibros para 1 y 4 años
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
        <Grid item xs>
          <Paper className={cls.paperTestimony}>
            <h4 className="testimonials__author">Mandy Sánchez</h4>
            <p className="testimonials__author--quote">
              Diverlibro para 18 meses
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
  );
}

export default Testimonials;
