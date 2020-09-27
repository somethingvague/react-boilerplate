import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Hello, World!</p>
      <button onClick={increment}>+</button>
      {count}
    </div>
  );
};

export default hot(module)(App);
