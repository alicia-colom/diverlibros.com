import React from "react";
import photoKids1 from "../../../assets/hero/niños-con-diverlibros-1.jpg";
import photoKids2 from "../../../assets/hero/niños-con-diverlibros-2.jpg";
import photoKids3 from "../../../assets/hero/niños-con-diverlibros-3.jpg";
import photoKids4 from "../../../assets/hero/niños-con-diverlibros-4.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="heroContainer">
      <h2>Descubre los libros sensoriales más personalizables del mercado</h2>
      <h3>
        Productos artesanales de fieltro basados en el método Montessori para
        alejar a los niños de las pantallas y sumergirlos en el juego y las
        historias a través de los sentidos
      </h3>
    </div>
  );
};

export default Hero;
