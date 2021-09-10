import React from "react";
import "./CatalogPage.scss";
import CatalogList from "./CatalogList";

const AboutUs = () => {
  return (
    <>
      <h2 className="title">
        Te presentamos el catálogo de productos de{" "}
        <span className="fontDiverlibros">Diverlibros</span>
      </h2>
      <div className="catalogContainer">
        <CatalogList />
      </div>

      <div className="quotes">
        <h3 className="title">
          Esto es lo que dicen quienes han recibido un{" "}
          <span className="fontDiverlibros">Diverlibros</span> en sus casas
        </h3>
        <ul className="quotes__list">
          <li className="quotes__list--item">
            <h4>Carmen, 34 años, Villalba del Alcor (Huelva)</h4>
            {/* <img src="" alt="foto pequeña en círculo estilo WhatsApp" /> */}
            <i>
              «El día que vimos a nuestro hijo coger él solo el libro y empezar
              a ponerle al señor Potato cada una de las partes del cuerpo, nos
              quedamos alucinados. El puzzle, las marionetas y el señor Potato
              son sus favoritos, sin duda. A nosotros nos gusta que sean juegos
              didácticos y capaces de calmar a niños inquietos.»
            </i>
          </li>
          <li className="quotes__list--item">
            <h4>Mari Ángeles, 40 años, Sevilla</h4>
            {/* <img src="" alt="foto pequeña en círculo estilo WhatsApp" /> */}
            <i>
              «Buscaba un juego que le sirviera de educación fácil y divertida.
              Tenía 3 años, pero ahora tiene 4 años y medio y sigue jugando con
              él. De hecho ha aprendido a abrochar y desabrochar los botones
              gracias al libro.»
            </i>
          </li>
          <li className="quotes__list--item">
            <h4>Laura, 34 años, Sevilla</h4>
            {/* <img src="" alt="foto pequeña en círculo estilo WhatsApp" /> */}
            <i>
              «De primeras la portada me enamoró. Lleva un pájaro precioso, que
              por entonces era el animal favorito de mi hija. Ha ido
              evolucionando con el tiempo, al principio lo tocaba todo,
              experimentando sin pararse demasiado en nada. Luego fue
              aprendiendo los juegos y se iba deteniendo cada vez más, acorde a
              su edad. Pero siempre su actividad favorita ha sido la de los
              títeres. El libro se puede llevar contigo porque no pesa nada. Por
              ejemplo, hubo unos meses en que cogíamos mucho el coche para
              viajes largos y era la alternativa a los dibujitos en el móvil.»
            </i>
          </li>
          <li className="quotes__list--item">
            <h4>Paco, 40 años, Jaén</h4>
            {/* <img src="" alt="foto pequeña en círculo estilo WhatsApp" /> */}
            <i>
              «Me gustó muchísimo la relación calidad-precio: diseños
              originales, variados, personalizables y a un precio realmente
              económico en comparación con otras webs, ¡más tratándose de un
              artículo elaborado totalmente a mano! A mi sobrino le ha encantado
              y enganchado. Aunque también tengo que resaltar el maravilloso
              trato personal con Nuria, su disposición, confianza y rapidez. Ya
              he recomendado Diverlibros en mis grupos de amigos. Pero creo que
              lo recomendaría a cualquier persona que busque un regalo para
              niños o niñas pequeños, no solo por lo bonitos o lo pedagógicos
              que son, sino porque un libro así quedará ya como recuerdo para
              toda la vida de esa persona.»
            </i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
