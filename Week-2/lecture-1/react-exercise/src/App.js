import './App.css';
import Image from 'components/Image';
import Header from 'components/Header';
import Description from 'components//Description';

export default function App() {

  // Another way we could do this
  const onClick = function(event) {
    alert(event.target.textContent);
  };

  const iceHockey = function() {
    alert("Ice Hockey");
  };
  const basketball = function() {
    alert("Basketball");
  };
  const soccer = function() {
    alert("Soccer");
  };

  return (
    <div className="App">
      <Header title="Canadian Sports" />
      <Image />
      <Description />

      <div>
        <button onClick={iceHockey}>Ice Hockey</button>
        <button onClick={basketball}>Basketball</button>
        <button onClick={soccer}>Soccer</button>
      </div>

    </div>

  );
}
