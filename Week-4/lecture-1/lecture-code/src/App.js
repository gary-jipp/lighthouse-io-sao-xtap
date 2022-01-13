import { useState } from "react";

const updateState = function() {
  const state = useState(0);
  return state;
};

export default function App() {
  const [count, setCount] = useState(0);


  const onClick = function() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={onClick}>+</button> count: {count}
    </div>
  );
}
