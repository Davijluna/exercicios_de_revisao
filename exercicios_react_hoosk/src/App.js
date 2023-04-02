import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() { 
  const [modal, setModal] = React.useState(false);
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
