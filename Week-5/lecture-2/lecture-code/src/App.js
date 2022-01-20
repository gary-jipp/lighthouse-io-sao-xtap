import 'App.css';
import { useState } from 'react';

const testData = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Kira" },
  { id: 4, name: "Mallory" },
];


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const increment = function() {
    setCount(count + 1);
  };
  const decrement = function() {
    setCount(count - 1);
  };
  const clear = function() {
    setCount(0);
  };

  const show = function() {
    setData(testData);
  };
  const hide = function() {
    setData([]);
  };

  const list = data.map(item => {
    return <li key={item.id} >{item.name}</li>;
  });

  return (
    <div className="App">
      <h2>Counter App</h2>

      <div className="counter" >
        <span className="count" >{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={clear} >0</button>
        <button onClick={increment}>+</button>
      </div>

      <p>
        The current count is: {count}
      </p>

      <button onClick={show}>Show Users</button>
      <button onClick={hide}>Hide Users</button>

      <ul>
        {list}
      </ul>

    </div >
  );
}

export default App;
