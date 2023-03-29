import React from "react";

function App() { 
  // Criamos estados para a ativação do botão
  // Desestruturando o que têm no "React.useState" pois ele é como um array.
  const [ativo, setAtivo] = React.useState(false);
  console.log(ativo);

function handleClinck () {
  // com o paramentro "!ativoValor" ele sempre muda de false para true ou true para false.
  setAtivo(!ativo);
}

  return (<button onClick={handleClinck}>{ativo ? 'Ativo' :'Inativo'}</button>
  );
}

export default App;
