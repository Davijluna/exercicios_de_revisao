import React from "react";

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  }
}

const App = () => {
  return (
    <div>
      Meu App
      <Teste /> 
    </div>
  );
}

export default App;
