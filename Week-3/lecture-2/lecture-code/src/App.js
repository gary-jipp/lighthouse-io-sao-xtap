import 'App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [quote, setQuote] = useState("");
  const [toggle, setToggle] = useState(0);

  console.log(toggle);

  useEffect(() =>
    axios.get("https://api.kanye.rest")
      .then(res => setQuote(res.data.quote))
    , [toggle]);

  const getQuote = function() {
    setToggle(toggle + 1);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>

      <button onClick={getQuote}>Click Me</button>
      <div>
        {quote}
      </div>
    </div>
  );
}