import React from 'react'

const Produto = ({ dados }) => {
  return (
    // recebendo os dados e imprimindo da tela as mensagens que recebeu da API.
    <div>
      <h1>{dados.name}</h1>
      <p>

      <img src={dados.types[1]} alt={dados.name} src={'ttps://pokeres.bastionbot.org/images/pokemon/${dados.id}.png'} />
      </p>
      {/* <img src={dados.} alt="" /> */}
      {/* <p>R$ {dados.preco}</p>
      <img src={dados.fotos[1].src} alt={dados.fotos[1].titulo} /> */}
    </div>
  )
}

export default Produto
