import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paperProduct: {
    backgroundColor: "rgba(221, 221, 221, 0.7)",
    minWidth: "15rem",
    height: "22rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "1rem",
  },
}));

const ProductCard = (props) => {
  const cls = useStyles();

  return (
    <Paper className={cls.paperProduct}>
      <h4 className="productCard__title">{props.name}</h4>
      <p className="productCard__description">{props.description}</p>
      <Link to={props.path}>
        <img
          src={props.image}
          alt={"Producto " + props.name}
          className="productCard__img"
          title={"Ir a " + props.name}
          aria-label={"Imagen del producto " + props.name + " de Diverlibro"}
        />
      </Link>
      <Link to={props.path}>
        <a name="link-diverlibros" title="Ir a Diverlibros" className="button">
          Ver {props.name}s
        </a>
      </Link>
    </Paper>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
