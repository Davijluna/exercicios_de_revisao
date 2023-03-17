import React from 'react';
import { nanoid } from 'nanoid'
import Button from './Button';

const App = () => {

  const randomPassword = nanoid()
  return (
    <div>
      <h1> senha: {randomPassword}</h1>
      <Button />
    </div>
  )
};

export default App;
