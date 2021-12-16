import './App.css';
import Image from 'components/Image';
import Header from 'components/Header';
import Description from 'components//Description';
import Sports from 'components/Sports';

export default function App() {
  const data = [
    "Ice Hockey",
    "Basketball",
    "Soccer",
    "Golf",
    "Tennis",
  ];

  return (
    <div className="App">
      <Header title="Canadian Sports" />
      <Image />
      <Description />
      <Sports sports={data}/>
    </div>
  );
}
