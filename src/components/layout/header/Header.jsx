import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";

import "./Header.scss";
import logo from "../../../assets/logos/logo_diverlibro-nombre_1200x425.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div className="header__nav--burger">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon htmlColor="#B76658" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/catalogo">
                <a
                  name="link-catalog"
                  title="Ir a catalogo"
                  className="header__nav--button"
                >
                  Productos
                </a>
              </Link>
            </MenuItem>
            {/* <MenuItem onClick={handleClose}>
              <Link to="/about">
                <a
                  name="link-about"
                  title="Ir a qué es Diverlibros"
                  className="header__nav--button"
                >
                  Qué es Diverlibro
                </a>
              </Link>
            </MenuItem> */}
            <MenuItem onClick={handleClose}>
              <Link to="/contacto">
                <a
                  name="link-contact"
                  title="Ir a contacto"
                  className="header__nav--button"
                >
                  Contacto
                </a>
              </Link>
            </MenuItem>
          </Menu>
        </div>

        <ul className="header__nav--basic">
          <li className="header__nav--item">
            <Link to="/catalogo">
              <a
                name="link-catalog"
                title="Ir a catalogo"
                className="header__nav--button"
              >
                Productos
              </a>
            </Link>
          </li>
          {/* <li className="header__nav--item">
            <Link to="/about">
              <a
                name="link-about"
                title="Ir a qué es Diverlibros"
                className="header__nav--button"
              >
                Qué es Diverlibro
              </a>
            </Link>
          </li> */}
          <li className="header__nav--item">
            <Link to="/contacto">
              <a
                name="link-contact"
                title="Ir a contacto"
                className="header__nav--button"
              >
                Contacto
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
