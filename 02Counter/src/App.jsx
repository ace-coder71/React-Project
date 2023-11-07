import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  // let count = 0;
  const addValue = () => {
    console.log("Clicked", counter);
    if(counter<20) setCounter(counter+1);    
  };

  const rmvValue = () => {
    console.log("Removed", counter);
    if(counter>0) setCounter(counter-1);
  };
  return (
    <>
      <h1>Cha r React</h1>
      <h2> Counter Value : {counter} </h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={rmvValue}
      >Remove Value</button>
    </>
  );
}

export default App
