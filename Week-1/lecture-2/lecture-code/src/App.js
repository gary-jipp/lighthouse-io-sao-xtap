import MyButton from "./components/MyButton";

export default function App() {

 
  const childClicked = function(text1, text2) {
    console.log("child Clicked", text1, text2);
  };

  const mouseHandler = function() {
    console.log("Mouse Enter");
  };

  return (
    <div className="App">

      <button onClick={buttonClicked}>Random</button>

      <h1 onMouseEnter={mouseHandler}>Hello World</h1>

      <MyButton label="Click Me" onClick={childClicked}>
        <h3>Click this button</h3>
      </MyButton>


      <br />
      <br />

      <div>Welcome to my cool website</div>
    </div>
  );
}
