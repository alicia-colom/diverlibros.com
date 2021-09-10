import React from "react";
import ProductCard from "./productCard/ProductCard";
import "./CatalogList.scss";

import photoProductDiverlibro from "../../../assets/products/product-main-diverlibro.jpg";
import photoProductMiniDiverlibro from "../../../assets/products/product-main-minidiverlibro.jpg";
import photoProductCalendario from "../../../assets/products/product-main-calendario.jpg";
import photoProductCuadro from "../../../assets/products/product-main-cuadro.jpg";

function CatalogList() {
  const productDetails = [
    {
      id: "diverlibro",
      name: "Diverlibro",
      image: photoProductDiverlibro,
      path: "/catalogo/diverlibro",
      description: "Sensoriales, artesanales y personalizables al detalle",
    },
    {
      id: "minidiverlibro",
      name: "Mini Diverlibro",
      image: photoProductMiniDiverlibro,
      path: "/catalogo/mini-diverlibro",
      description: "Pequeñas dosis de con la misma gran diversión",
    },
    {
      id: "calendario",
      name: "Calendario",
      image: photoProductCalendario,
      path: "/catalogo/calendario",
      description: "Un ritual de juego y aprendizaje todas las mañanas",
    },
    {
      id: "cuadro",
      name: "Cuadro",
      image: photoProductCuadro,
      path: "/catalogo/cuadro",
      description: "Un recuerdo con su nombre y su motivo favorito",
    },
  ];

  const products = productDetails.map((eachProduct) => (
    <li key={eachProduct.id}>
      <ProductCard
        name={eachProduct.name}
        image={eachProduct.image}
        path={eachProduct.path}
        description={eachProduct.description}
      />
    </li>
  ));

  return <ul className="catalogList">{products}</ul>;
}

export default CatalogList;
