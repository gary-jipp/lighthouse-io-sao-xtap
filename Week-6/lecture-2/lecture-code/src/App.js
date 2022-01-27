import { useState } from 'react';
import ClassCounter from 'ClassCounter';
import 'App.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h2>React Class of 2022</h2>
      <button onClick={() => { setVisible(!visible); }}>Show/Hide</button>

      {visible &&
        <ClassCounter label="My Classy Counter"/>
      }

    </div >
  );
}

export default App;
