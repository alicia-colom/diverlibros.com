import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <h1>Diverlibros</h1>
        <nav>
          <button>Qué es Diverlibro</button>
          <button>Productos</button>
          <button>Contacto</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
