import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <small className="footer__section">
        <Link to="/aviso-legal">
          <a
            name="link-legal-advice"
            title="Ir a Aviso legal"
            className="footer__copyright--link"
          >
            {" "}
            Aviso legal |{" "}
          </a>
        </Link>
        <Link to="/contacto">
          <a
            name="link-contact"
            title="Contacta conmigo"
            className="footer__copyright--link"
          >
            Contacto{" "}
          </a>
        </Link>
      </small>
      <small className="footer__section"> | &#169; Diverlibros 2021 |</small>
      <small className="footer__section footer__copyright">
        Made with{" "}
        <i
          className="fa fa-heart footer__copyright--icon"
          aria-hidden="true"
        ></i>{" "}
        by{" "}
        <a
          className="footer__copyright--link"
          href="https://www.linkedin.com/in/aliciacolomortega/"
          target="_blank"
          rel="noreferrer"
          title="Enlace externo a LinkedIn"
        >
          {" "}
          Alicia Colom{" "}
        </a>
      </small>
    </footer>
  );
};

export default Footer;
