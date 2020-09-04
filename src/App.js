import React from "react";

//Estilos
import "./App.css";

//Componentes
import Hola from "./components/Hola/";

function App() {
  const nombres = ["Hector", "Julian", "Paola", "Daniel"];

  return (
    <div className="App">
      {nombres.map((nombre) => (
        <Hola nombre={nombre} />
      ))}
    </div>
  );
}

export default App;
