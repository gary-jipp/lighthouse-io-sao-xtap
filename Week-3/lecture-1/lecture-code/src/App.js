import 'App.css';
import { useState } from 'react';

export default function App() {
  // console.log("App Component Rendering");
  const [text, setText] = useState("");
  const [otherText, setOtherText] = useState("");

  const onChange = function(event) {
    setText(event.target.value);
  };

  const onClick = function() {
    setOtherText("Input: " + text);
  };

  const onSubmit = function(event) {
    event.preventDefault();
    console.log("onSubmit Called");
    setOtherText(<h2>{`${text}`}</h2>);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Submit</button>
      </form>

      <div>
        {otherText}
      </div>
    </div>
  );
}