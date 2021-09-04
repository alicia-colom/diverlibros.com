import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <small>
        &#169; Diverlibros 2021 | Página web desarrollada por Alicia Colom |{" "}
        <Link to="/aviso-legal">
          <a name="link-legal-advice" title="Ir a Aviso legal" className="">
            Aviso legal |{" "}
          </a>
        </Link>
        <Link to="/contacto">
          <a name="link-contact" title="Contacta conmigo" className="">
            Contacto
          </a>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
