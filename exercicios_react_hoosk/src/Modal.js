import React from 'react'

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
