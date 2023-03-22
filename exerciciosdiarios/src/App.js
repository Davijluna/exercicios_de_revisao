import React from "react";

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
} 

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu titulo 1" />
      <Titulo cor="blue" texto="Meu titulo 2" />
      <Titulo cor="green" texto="Meu titulo 3" />
      Meu App
    </div>
  );
}

export default App;
