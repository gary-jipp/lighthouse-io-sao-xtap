import "App.css";
import { useState } from "react";
import Destination from "components/Destination";

export default function App() {
  const [likes, setLikes] = useState({
    destination1: 0,
    destination2: 0
  });

  const [dislikes, setDislikes] = useState({
    destination1: 0,
    destination2: 0
  });

  const onLike1 = function() {
    setLikes((prev) => ({
      ...prev,
      destination1: prev.destination1 + 1
    }));
  };

  const onDislike1 = function() {
    setDislikes((prev) => ({
      ...prev,
      destination1: prev.destination1 + 1
    }));
  };

  const onLike2 = function() {
    setLikes((prev) => ({
      ...prev,
      destination2: prev.destination2 + 1
    }));
  };

  const onDislike2 = function() {
    setDislikes((prev) => ({
      ...prev,
      destination2: prev.destination2 + 1
    }));
  };

  const getResult = function() {
    const netDestination1 = likes.destination1 - dislikes.destination1;
    const netDestination2 = likes.destination2 - dislikes.destination2;
    const difference = netDestination1 - netDestination2;
    if (difference === 0) {
      return "Same popularity";
    }
    if (difference < 0) {
      return "Destination 2";
    }
    return "Destination 1";
  };

  return (
    <>
      <h1> Popular Destination </h1>
      <div className="App">

        <Destination
          image="https://i.imgur.com/Uo6fNbd.jpeg"
          onLike={onLike1}
          onDislike={onDislike1}
          likes={likes.destination1}
          dislikes={dislikes.destination1}
        />

        <div>
          <p className="popularDestinations"> Most Popular Destination </p>
          {getResult()}
        </div>

        <Destination
          image="https://i.imgur.com/7YeuCXh.jpeg"
          onLike={onLike2}
          onDislike={onDislike2}
          likes={likes.destination2}
          dislikes={dislikes.destination2}
        />

      </div>
    </>
  );

};
