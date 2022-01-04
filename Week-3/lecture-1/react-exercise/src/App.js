import "App.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [guess, setGuess] = useState(-1);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10) + 1);

  const onChange = function(event) {
    setInput(event.target.value);
  };

  const onSubmit = function(event) {
    event.preventDefault();
    const number = Number(input);
    if (!isNaN(number)) {
      setGuess(number);
    }

  };


  let result = "You Got it!";
  if (guess < randomNum) {
    result = "That's too low!";
  }
  if (guess > randomNum) {
    result = "That's too high!";
  }

  const reset = function() {
    setRandomNum(Math.floor(Math.random() * 10) + 1);
    setInput("");
    setGuess(-1);
  };

  return (
    <div className="App">

      <h1> Guess the number </h1>

      <form onSubmit={onSubmit}>
        <label class="guess">
          Write a number between 1 and 10:
          <br />
          <input value={input} onChange={onChange} />
        </label>
        <br />
        <button> Guess </button>
      </form>

      <button onClick={reset}> Reset </button>
      {(guess > 0) && <h5>
        {result}
      </h5>}
    </div>
  );
}
