import React from 'react'
import Produto from './Produto';
// import './App.css' teste

const App = () => {
 // continuando revisão de react.....
  const [ativo, setAtivo] = React.useState(false);

  // const [contar, setContar] = React.useState(0);
  // const [dados, setDados] = React.useState(null);

  // React.useEffect(() => {
  //  const response = fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
  //     .then((response) => response.json())
  //     .then((json) => setDados(json));
  //     console.log(response)
  // }, []);..

  // adicionando comentario para tentar resolver push.

  return (
    <>
    {ativo && <Produto />}
    <button onClick={() => setAtivo(!ativo)}>Ativar</button>
     {/* <div>
      {dados && <div>
      <h1>{dados.nome}</h1>
       <p>R$ {dados.preco * contar}</p> 
        </div>}
     <button onClick={() => setContar(contar + 1)}>{contar}</button>
     
     </div>
    </> */}
    </>
  )
}

export default App
