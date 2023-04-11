import React from "react";
import Smartophone from "./Componentes/Smartophone";
import Notebook from "./Componentes/Notebook";
import Table from "./Componentes/Tablet";

function App() {
  const [produto, setProduto] = React.useState(null);

  function handleclick(event) {
    console.log(event.target.innerText);
  }
  return (
    <div>
      <Smartophone style={{margin: '.5rem'}} onClick={handleclick} />
      <Notebook style={{margin: '.5rem'}} onClick={handleclick} />
      <Table style={{margin: '.5rem'}} onClick={handleclick} />

    </div>
  );
}

export default App;
