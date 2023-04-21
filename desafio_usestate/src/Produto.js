import React from 'react'

const Produto = ({ dados }) => {
  return (
    // recebendo os dados e imprimindo da tela as mensagens que recebeu da API.
    <div>

      <div data-js="pokemonImg">
      </div>
      <h2>{dados.nome}</h2>
      <p>R$ {dados.preco}</p> 
      <img src={dados.fotos[1].src} alt={dados.fotos[1].titulo} /> 
    </div>
  )
}

export default Produto
