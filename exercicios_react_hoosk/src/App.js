import React from "react";

function App() { 
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoValor);

function handleClinck () {
  atualizaValor(!ativoValor);
}

  return (<button onClick={handleClinck}>{ativoValor ? 'Ativo' :'Inativo'}</button>
  );
}

export default App;
