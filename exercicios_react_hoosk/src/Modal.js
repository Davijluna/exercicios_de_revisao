import React from 'react'
// aula useState 1 OK.
// aula useState 2
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
