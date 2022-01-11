import "App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import LikeButtons from "components/LikeButtons";

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
        <div>
          <p> Destination 1 </p>
          <img alt="travelImage" src="https://i.imgur.com/Uo6fNbd.jpeg" />
          <LikeButtons onLike={onLike1} onDislike={onDislike1}></LikeButtons>
          <p> Likes: {likes.destination1} </p>
          <p> Dislikes: {dislikes.destination1} </p>
        </div>
        <div>
          <p className="popularDestinations"> Most Popular Destination </p>
          {getResult()}
        </div>
        <br />
        <div>
          <p> Destination 2 </p>
          <img alt="travelImage" src="https://i.imgur.com/7YeuCXh.jpeg" />
          <LikeButtons onLike={onLike2} onDislike={onDislike2}></LikeButtons>
          <p> Likes: {likes.destination2} </p>
          <p> Dislikes: {dislikes.destination2} </p>
        </div>
      </div>
    </>
  );

};
