import Counter from 'components/Counter';
import { useReducer } from 'react';
import countReducer from 'reducers/countReducer';
import 'App.css';

function App() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <h2>
        Counter
      </h2>

      <Counter
        count={count}
        dispatch={dispatch}
        increment={2}
      />

      <p>The current count is: {count}</p>
    </div>
  );
}

export default App;
