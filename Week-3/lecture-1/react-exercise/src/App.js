import "App.css";
import { useState } from "react";

export default function App() {

  
  return (
    <div className="App">

      <h1> Guess the number </h1>

      <form >
        <label class="guess">
          Write a number between 1 and 10:
          <br />
          <input />
        </label>
        <br />
        <button> Guess </button>
      </form>

      <button> Reset </button>
      
    </div>
  );
}
