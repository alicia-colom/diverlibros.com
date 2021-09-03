import React from "react";
import "./ProductMiniDiverlibro.scss";

const ProductMiniDiverlibro = () => {
  return (
    <>
      <div className="product__container">
        <h2>
          <span className="fontDiverlibros">Mini Diverlibros</span>
        </h2>
        <div>
          <div>
            <h3>Pequeñas dosis de gran diversión</h3>
            <p>
              Este libro sensorial de fieltro tiene un diseño predefinido con
              seis actividades fijas.
            </p>
            <p>
              Personalizo la portada con el nombre del niño o la niña y un
              dibujo, animal, personaje u objeto que tú elijas.
            </p>
          </div>
          <div>
            <ul>
              <li>Edad: diferentes modelos entre los 6 meses y los 5 años</li>
              <li>Tamaño: 20x18 cm</li>
              <li>
                Acabado: terminaciones cosidas a máquina, páginas interiores
                cosidas a la portada y cierre con solapa y velcro
              </li>
              <li>
                Precio: 25 euros (letras del nombre cosidas a la portada) 29
                euros (letras móviles con velcro)
              </li>
              <li>Tiempo de confección: 1 semana</li>
            </ul>
            <small>
              * ¿Quieres un libro sensorial aún más personalizado? Entonces
              probablemente te interese echar un vistazo a mis Diverlibros, con
              un diseño y actividades 100% personalizables a los gustos del
              peque.
            </small>
          </div>
        </div>

        <div>
          <h3>Quieres pedir un mini-Diverlibro?</h3>
          <ol>
            <li>Rellena el formulario con las características básicas.</li>
            <li>
              En un máximo de 24 horas me pongo en contacto contigo para
              concretar los detalles de tu libro sensorial.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ProductMiniDiverlibro;
