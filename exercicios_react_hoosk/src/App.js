import React from "react";

function App() { 
  // Criamos estados para a ativação do botão
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoValor);

function handleClinck () {
  // com o paramentro "!ativoValor" ele sempre muda de false para true ou true para false.
  atualizaValor(!ativoValor);
}

  return (<button onClick={handleClinck}>{ativoValor ? 'Ativo' :'Inativo'}</button>
  );
}

export default App;
