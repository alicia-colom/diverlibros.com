import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../../assets/logos/logo_diverlibro-nombre_1200x425.png";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt="Logo de Diverlibros"
            className="header__logo"
            title="Ir a inicio"
            aria-label="Logotipo de Diverlibros"
          />
        </Link>
      </h1>
      <nav className="header__nav">
        <Link to="/about">
          <a
            name="link-about"
            title="Ir a qué es Diverlibros"
            className="header__nav--button"
          >
            Qué es Diverlibro
          </a>
        </Link>
        <Link to="/catalogo">
          <a
            name="link-catalog"
            title="Ir a catalogo"
            className="header__nav--button"
          >
            Productos
          </a>
        </Link>
        <Link to="/contacto">
          <a
            name="link-contact"
            title="Ir a contacto"
            className="header__nav--button"
          >
            Contacto
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
