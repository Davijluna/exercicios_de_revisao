import React from 'react';

 function Produto() {

  React.useEffect(() => {
    const handleScroll =(event) => {
      console.log(event)
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return (
    <div style={{height: "200vh"}}>
      <p>Meu Produto</p>
    </div>
  );
}

export default Produto;
