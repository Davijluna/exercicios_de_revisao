import React from "react";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  }
}

const App = () => {
  return (
    <div>
      Meu App
      <Teste />
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
