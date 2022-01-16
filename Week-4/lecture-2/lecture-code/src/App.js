import useCounter from "./hooks/useCounter";
import KanyeQuote from "./KanyeQuote";

export default function App() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <div>
        {count}
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={increment}>+</button>
      </div>

      {(count % 2 === 0) && <ul>
        <KanyeQuote/>
      </ul>}

    </div>
  );
}
