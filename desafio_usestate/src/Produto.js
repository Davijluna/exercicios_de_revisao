import React from 'react'

const Produto = ({ dados }) => {
  return (
    // recebendo os dados e imprimindo da tela as mensagens que recebeu da API.
    <div>

      <div data-js="pokemonImg">
      <img alt={dados.name} src={`https://pokeres.bastionbot.org/images/pokemon/${dados.id}.png`} />
      </div>
      <h2>{dados.id}. {dados.name}</h2>
      {/* <img src={dados.} alt="" /> */}
      {/* <p>R$ {dados.preco}</p>
      <img src={dados.fotos[1].src} alt={dados.fotos[1].titulo} /> */}
    </div>
  )
}

export default Produto
