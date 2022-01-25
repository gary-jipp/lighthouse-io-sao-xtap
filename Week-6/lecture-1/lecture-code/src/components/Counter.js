const { useState } = require("react");

const Counter = function(props) {
  let [count, setCount] = useState(props.start);

  const increment = function() {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  const clear = function() {
    setCount(0);
  };

  return (
    <div>
      {count}
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>

  );

};

export default Counter;