import React from "react";
import Produto from "./Produto";

const App =() => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleclick(event) {

  setCarregando(true);

  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
  );
  // transformando a constante response em um arquivo json
  const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{margin: '5px'}} onClick={handleclick} >notebook</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >Smartphone</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >tablet</button>
      {carregando && <p>Carregando</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
