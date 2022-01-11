import "App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [likes, setLikes] = useState({
    destination1: 0,
    destination2: 0
  });
  const [dislikes, setDislikes] = useState({
    destination1: 0,
    destination2: 0
  });

  const netDestination1 = likes.destination1 - dislikes.destination1;
  const netDestination2 = likes.destination2 - dislikes.destination2;
  return (
    <>
      <h1> Popular Destination </h1>
      <div className="App">
        <div>
          <p> Destination 1 </p>
          <img alt="travelImage" src="https://i.imgur.com/Uo6fNbd.jpeg" />
          <div>
            <button
              onClick={() =>
                setLikes((prev) => ({
                  ...prev,
                  destination1: prev.destination1 + 1
                }))
              }
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button
              onClick={() =>
                setDislikes((prev) => ({
                  ...prev,
                  destination1: prev.destination1 + 1
                }))
              }
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          <p> Likes: {likes.destination1} </p>
          <p> Dislikes: {dislikes.destination1} </p>
        </div>
        <div>
          <p className="popularDestinations"> Most Popular Destination </p>
          {netDestination1 - netDestination2 === 0
            ? "Same popularity"
            : netDestination1 - netDestination2 < 0
              ? "Destination 2"
              : "Destination 1"}
        </div>
        <br />
        <div>
          <p> Destination 2 </p>
          <img alt="travelImage" src="https://i.imgur.com/7YeuCXh.jpeg" />
          <div>
            <button
              onClick={() =>
                setLikes((prev) => ({
                  ...prev,
                  destination2: prev.destination2 + 1
                }))
              }
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>

            <button
              onClick={() =>
                setDislikes((prev) => ({
                  ...prev,
                  destination2: prev.destination2 + 1
                }))
              }
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          <p> Likes: {likes.destination2} </p>
          <p> Dislikes: {dislikes.destination2} </p>
        </div>
      </div>
    </>
  );
}
