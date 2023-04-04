import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
// 
const App = () => { 
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem('ativo');
    return ativo;
  });
  const [items, setItems] = React.useState('teste');

  function handleClick() {
    // items = 'Outros'; esta parte deve usar o setIems para alterar o estado. 
    setItems('Outros')
  }

  return (
    <div>
      <button onClick={handleClick}>{items}</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>

  );
}

export default App;
