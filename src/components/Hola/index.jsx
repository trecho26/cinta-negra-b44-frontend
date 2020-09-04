import React from "react";

//Estilos
import "./index.css";

const Hola = ({ nombre }) => {
  return (
    <div>
      <h1 className="titulo">Hola {nombre}</h1>
    </div>
  );
};

export default Hola;
