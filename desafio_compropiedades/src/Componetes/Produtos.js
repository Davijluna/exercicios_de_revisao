import React from 'react'


const Produtos = () => {
  const produtos = [
    {nome: 'Notebook', propiedades: ['16gb ram', '512gb']},
    {nome: 'Smartphone', propiedades: ['2gb ram', '128gb']},
  ] 
  return (
    <>
    <div>
      Produtos
    </div>
    {produtos.map((produto) => 
    <div style={{border: "solid 1px"}}>{produto.nome}
    <div>
      {produto.propiedades.map((valor) => (
        <li>{valor}</li>
      ))}
    </div>
    </div>
     )}
    </>

  );
}

export default Produtos
