import React from 'react';
import { nanoid } from 'nanoid'

const App = () => {

  const randomPassword = nanoid()
  return <div>{randomPassword}</div>;
};

export default App;
