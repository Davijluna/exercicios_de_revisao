import React from 'react'
// import './App.css'

const App = () => {

  const [contar, setContar] = React.useState(0);
  console.log('Executou Fora')
  React.useEffect(() => {
    console.log('Executou Dentro')
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  return (
    <>
     <div>

     <button onClick={() => setContar(contar + 1)}>{contar}</button>
     
     </div>
    </>
  )
}

export default App
