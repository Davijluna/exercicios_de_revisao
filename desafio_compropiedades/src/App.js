import React from 'react'
import Home from './Componetes/Home'
import Produtos from './Componetes/Produtos'



function App() {
  const {pathname} = window.location
  return (
    <div>
     
      <ul>
      <li>
        <a href='/' >Home</a>
      </li>
      <li>
        <a href='/produtos'>Produtos</a>
      </li>
      </ul>
      {pathname === '/' ? <Home /> : <Produtos/>}
    </div>
  );
}

export default App;
