
const Counter = function(props) {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const DECREMENT3 = "DECREMENT3";
  const CLEAR = "CLEAR";

  const increment = function() {
    props.dispatch({ type: INCREMENT, value: props.increment });
  };
  const decrement = function() {
    props.dispatch({ type: DECREMENT3, value: props.increment  });
  };
  const clear = function() {
    props.dispatch({ type: CLEAR });
  };

  return (
    <div class="counter">
      <span>{props.count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;