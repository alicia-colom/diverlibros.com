import React from "react";
import "./ProductCuadro.scss";

const ProductCuadro = () => {
  return (
    <>
      <div className="product__container">
        <h2>
          <span className="fontDiverlibros">Cuadros personalizados</span>
        </h2>

        <div>
          <div>
            <h3>Un recuerdo con su nombre y su motivo favorito</h3>
            <p>
              Este cuadro de fieltro es perfecto para decorar la habitación del
              peque.
              <br />
              <br />
              Diseño el cuadro con el nombre del niño o la niña y con el motivo
              que prefieras: su animal favorito, un objeto o un personaje.
            </p>
          </div>
          <div>
            <ul>
              <li>Tamaño: 32x24 cm</li>
              <li>Precio: 27 euros</li>
              <li>Tiempo de confección: 1 semana</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>Quieres pedir un cuadro personalizado?</h3>
          <ol>
            <li>Rellena el formulario con las características que quieres.</li>
            <li>
              En un máximo de 24 horas me pongo en contacto contigo para
              concretar los detalles de tu cuadro.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ProductCuadro;
