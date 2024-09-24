import {InitializeValue} from "./InitializeValue";
import React, { useMemo, useState} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [items] = useState(InitializeValue);

  //Without using react hook use memo
   //const selectedItemwithoutusingmemo = items.find((item) => item?.isSelected)

  //Using react hook memo
  const selectedItemusingmemo = useMemo(() => items.find((item) => item?.isSelected),[items])

  return (
    <div className="toturial">
      <h1>Count : {count}</h1>
      <h1>Selected Item: {selectedItemusingmemo?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
