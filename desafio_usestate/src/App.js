import React from "react";
import Produto from "./Produto";

const App =() => {
  const [dados, setDados] = React.useState(null);

  async function handleclick(event) {
   // eslint-disable-next-line no-template-curly-in-string
   const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}');
    console.log(response);
  }

  return (
    <div>
      <button style={{margin: '5px'}} onClick={handleclick} >notebook</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >Smartphone</button>
      <button style={{margin: '5px'}}  onClick={handleclick} >Tablet</button>
      <Produto />
    </div>
  );
}

export default App;
