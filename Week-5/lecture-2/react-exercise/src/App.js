import "App.css";
import { useState } from "react";

const App = function() {
  const [languages, setLanguages] = useState([
    "Javascript",
    "C#",
    "Java",
    "Python",
    "C++",
    "Go"
  ]);

  const onClick = () =>
    setLanguages(
      languages
        .map((lang) => ({ lang, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ lang }) => lang)
    );
    
  return (
    <div className="App">
      <h1> Coding Languages </h1>
      <button onClick={onClick}> Randomize </button>
      <ul>
        {languages.map((language, index) => (
          <li data-testid="language" key={index}>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

