import React from 'react'
import Titulo from './Titulo';


const Produtos = () => {
  const produtos = [
    {nome: 'Notebook', propiedades: ['16gb ram', '512gb']},
    {nome: 'Smartphone', propiedades: ['2gb ram', '128gb']},
  ] 
  return (
    <>
   <Titulo texto="Produtos"/>
    {produtos.map((produto) => 
    <div key={produto.nome} style={{border: "solid 1px", margin: '10px', padding: '15px'}}>{produto.nome}
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
