import React from 'react'
// aula useStatre 1
const Modal = ({modal, setModal}) => {
  if (modal === true) {
    return (
      <div>
        {/* inicinado vendo novamente a aula */}
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    )
  }
  return null;

}

export default Modal
