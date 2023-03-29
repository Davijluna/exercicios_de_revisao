import React from "react";

function App() { 
  // Criamos estados para a ativação do botão
  // Desestruturando o que têm no "React.useState" pois ele é como um array.
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome: "Davi", idade: "35"})
  console.log(ativo);

function handleClinck () {
  // com o paramentro "!ativoValor" ele sempre muda de false para true ou true para false.
  setAtivo(!ativo);
  // adicionando iinformações para o setDados 
  setDados({...dados, faculdade: 'Possui faculdade'})
}

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
        <button onClick={handleClinck}>{ativo ? 'Ativo' :'Inativo'}</button>
    </div>

  );
}

export default App;
