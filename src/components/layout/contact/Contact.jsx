import React from "react";
import "./Contact.scss";
import Form from "../../forms/form";

const Contact = () => {
  return (
    <>
      <h2>
        <span className="fontDiverlibros">Contacto</span>
      </h2>
      <h3 className="contact__text--title">¿En qué puedo ayudarte?</h3>

      <div className="contact__container">
        <div className="contact__section">
          <p className="contact__text--description">Estoy al otro lado si…</p>
          <ul className="contact__list">
            <li className="contact__list--item">
              - te preguntas cuál es el producto que más le gustará a tu peque
            </li>
            <li className="contact__list--item">
              - tienes dudas sobre qué libro se adapta mejor a su edad
            </li>
            <li className="contact__list--item">
              - no sabes cómo elegir las actividades
            </li>
            <li className="contact__list--item">
              - o tienes cualquier otra pregunta
            </li>
          </ul>
          <p className="contact__text--description">
            Si quieres hacerme cualquier pregunta, comentario o sugerencia,
            puedes hacerlo rellenando este formulario, o por teléfono, WhatsApp
            o email, y en el plazo de 24 horas me pondré en contacto contigo.
          </p>
          <ul className="contact__list">
            <li className="contact__list--item">
              <span className="contact__list--title">Teléfono: </span> +34 685
              903 366
            </li>
            <li className="contact__list--item">
              <span className="contact__list--title">Email: </span>{" "}
              <a href="mailto:librosfieltro@gmail.com">
                librosfieltro@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="contact__section">
          <Form />
        </div>
      </div>

      <small className="contact__small">
        Diverlibros será responsable por tus datos, se enviarán a
        www.diverlibros.es para poder recoger las dudas sobre una posible
        contratación. Este tratamiento se hace con base en diligencias
        pre-contractuales. Podrás ejercer cualquier derecho que tengas
        relacionado con la protección de tus datos según se describe en la
        política de privacidad. (Enlace a política de privacidad).
      </small>
    </>
  );
};

export default Contact;
