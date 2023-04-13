import React from "react";
import Produto from "./Produto";

const App =() => {
  // estado de dados da API
  const [dados, setDados] = React.useState(null);
  //estado que altera para true quando está carregando e altera pra false quando para de carregar.
  const [carregando, setCarregando] = React.useState(null);

  async function handleclick(event) {
  // inicializa como true pra mostrar o carregamento.
  setCarregando(true);

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${event.target.innerText}`,
  );
  // transformando a constante response em um arquivo json.
  const json = await response.json();
    setDados(json);
  // depois dos dados garregados muda pra false o garregamento.
    setCarregando(false);
    console.log(json);
  }

  return (
    <div>
      <button style={{margin: '5px'}} onClick={handleclick} >1</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >2</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >3</button>
      {carregando && <p>Carregando</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
