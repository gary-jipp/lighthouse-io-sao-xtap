import { useState, useEffect } from 'react';
import axios from 'axios';
import 'App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    axios.get("https://random-data-api.com/api/name/random_name?size=10")
      .then(res => setData(res.data));
  }, [num]);

  const list = data.map(item => {
    return (
      <li>
        <p>
          ID: {item.id}
        </p>
        <p>
          Name:  {item.name}
        </p>
      </li>
    );
  });

  const onClick = function() {
    setNum(num + 1);
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={onClick}>Refresh</button>
      <ul>
        {list}
      </ul>
    </div>
  );
}