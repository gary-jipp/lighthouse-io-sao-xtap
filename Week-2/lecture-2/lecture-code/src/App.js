import { useState } from 'react';

import 'App.css';

export default function App() {
  console.log("Rendering App ...");
  const [input, setInput] = useState("");
  const [data, setData] = useState([2, 3, 4]);

  const onChange = function(event) {
    setInput(event.target.value);
  };

  const onClick = function() {
    // const data1 = data.slice();
    // data1.push(5);
    setData([...data, 5]);
  };

  const list = data.map((item,i) => {
    return <li key={i}>{item}</li>;
  });

  console.log("Render complete!");
  return (
    <div className="App">
      <h1>Hello React</h1>
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onClick}>Update</button>

      <ul>{list}</ul>
    </div>
  );
};