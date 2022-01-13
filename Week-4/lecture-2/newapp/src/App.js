import { useState } from 'react';
import './App.css';

// const updateState = () => {
//   const [age, setAge] = useState(19)
//   return [age, setAge]
// }

// const updateState = function() {
//   const state = useState(0);
//   return state;
// };

function App() {

  if (true) {
    const [age, setAge] = useState(19);
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
