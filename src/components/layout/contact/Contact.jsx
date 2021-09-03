import React from "react";
import "./Contact.scss";
import Form from "../../forms/form";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <h2>Contacto</h2>
        <p>
          Si quieres hacernos cualquier pregunta, comentario o sugerencia,
          puedes hacerlo a través de este formulario, o por teléfono, WhatsApp o
          email
        </p>
        <Form />
      </div>
    </>
  );
};

export default Contact;
