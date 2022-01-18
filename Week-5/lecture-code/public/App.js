import "App.css";
import Counter from "components/Counter";
import Counter1 from "components/Counter1";
import { useState, useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CLEAR = "CLEAR";

const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      break;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, dispatch2] = useReducer(countReducer, 0);
  const [count3, setCount3] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0);

  const increment1 = function() {
    setCount1(count1 + 1);
  };
  const decrement1 = function() {
    setCount1(count1 - 1);
  };
  const clear1 = function() {
    setCount1(0);
  };

  const increment2 = function() {
    dispatch2({ type: INCREMENT });
  };
  const decrement2 = function() {
    dispatch2({ type: DECREMENT });
  };
  const clear2 = function() {
    dispatch2({ type: CLEAR });
  };

  const increment3 = function() {
    setCount3(count3 + 1);
  };
  const decrement3 = function() {
    setCount3(count3 - 1);
  };
  const clear3 = function() {
    setCount3(0);
  };

  return (
    <div class="App">
      <h1>Counters!</h1>
      <div class="counter">
        <span>{count1}</span>
        <button onClick={decrement1}>-</button>
        <button onClick={clear1}>0</button>
        <button onClick={increment1}>+</button>
      </div>

      <div class="counter">
        <span>{count2}</span>
        <button onClick={decrement2}>-</button>
        <button onClick={clear2}>0</button>
        <button onClick={increment2}>+</button>
      </div>

      <Counter1
        count={count3}
        increment={increment3}
        decrement={decrement3}
        clear={clear3} />


      <Counter count={count} dispatch={dispatch} />

    </div>
  );
}
