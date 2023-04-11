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
      <Smartophone onClick={handleclick} />
      <Notebook onClick={handleclick} />
      <Table onClick={handleclick} />

    </div>
  );
}

export default App;
