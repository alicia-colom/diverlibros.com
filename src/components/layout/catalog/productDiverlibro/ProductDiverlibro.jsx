import React from "react";
import "./ProductDiverlibro.scss";

const ProductDiverlibro = () => {
  return (
    <>
      <div className="product__container">
        <h2>
          <span className="fontDiverlibros">Diverlibros</span>
        </h2>
        <div>
          <div>
            <h3>Un libro sensorial artesanal y personalizable al detalle</h3>
            <p>
              ¡El producto estrella! Este libro sensorial de fieltro es
              completamente personalizable, desde la portada hasta cada una de
              las actividades. Me adapto a la edad del niño o la niña, así como
              a sus gustos e inquietudes.
              <br />
              <br />
              Elige las actividades que más te gusten e incluye a los
              personajes, animales, objetos y dibujos preferidos del peque. Todo
              queda integrado en el desarrollo de las actividades.
              <br />
              Si lo prefieres, también puedo confeccionar las actividades desde
              cero con tus indicaciones.
            </p>
            <p>
              <i>
                Con este Diverlibro tu peque tendrá un libro sensorial único en
                el mundo hecho a mano especialmente para él o ella
              </i>
            </p>
          </div>

          <div>
            <ul>
              <li>Edad: adaptable de 6 meses a 5 años</li>
              <li>Tamaño: 24x24 cm</li>
              <li>
                Precio: a partir de 30 euros, en función de las características
                y el número de páginas
              </li>
              <li>Tiempo de confección: 2-3 semanas</li>
            </ul>
            <small>
              * Los Diverlibros están 100% hechos a mano y personalizados al
              detalle. Por eso necesito entre 2 y 3 semanas para elaborar tu
              libro y que quede perfecto. ¿No puedes esperar tanto? Echa un
              vistazo a mis mini-Diverlibros con actividades prediseñadas.
            </small>
          </div>
        </div>

        <div>
          <h3>¿Quieres pedir un libro sensorial personalizado?</h3>
          <ol>
            <li>Rellena el formulario con las características básicas. </li>
            <li>
              En un máximo de 24 horas me pongo en contacto contigo para entrar
              en detalle sobre la personalización y diseñar juntos un Diverlibro
              único.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ProductDiverlibro;
