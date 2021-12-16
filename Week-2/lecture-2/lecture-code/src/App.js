import { useState } from 'react';

import 'App.css';

const initialData = [
  "Ice Hockey",
  "Soccer",
  "Tennis",
  "Basketball"
];

export default function App() {
  console.log("Rendering App ...");
  const [data, setData] = useState(initialData);
  const [input, setInput] = useState("");

  const onChange = function(event) {
    setInput(event.target.value);
  };

  const onClick = function() {
    data.push("123");
    setData(data)
  };


  const list = data.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className="App">
      <h1>Hello React</h1>
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onClick}>Add to List</button>
      
      <ul>{list}</ul>
    </div>
  );
};