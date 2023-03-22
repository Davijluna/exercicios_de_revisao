import React from "react";

// COM DESCINTRUTURAÇÃO.
const Titulo = ({cor, texto}) => {
  return <h1 style={{color: cor}}>{texto}</h1>
} 

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu titulo 1" />
      <Titulo cor="blue" texto="Meu titulo 2" />
      <Titulo cor="green" texto="Meu titulo 3" />
      Meu App
    </div>
  );
}

export default App;

// SEM DESCINTRUTURAÇÃO.
// const Titulo = (props) => {
//   return <h1 style={{color: props.cor}}>{props.texto}</h1>
// } 

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="red" texto="Meu titulo 1" />
//       <Titulo cor="blue" texto="Meu titulo 2" />
//       <Titulo cor="green" texto="Meu titulo 3" />
//       Meu App
//     </div>
//   );
// }

// export default App;
