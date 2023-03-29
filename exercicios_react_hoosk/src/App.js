import React from "react";

function App() { 
  const ativo = true;

  return (<button disabled={!ativo}>{ativo ? 'Ativo' :'Inativo'}</button>
  );
}

export default App;
