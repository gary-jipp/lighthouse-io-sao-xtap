import LikeButtons from "components/LikeButtons";
import { useState } from "@fortawesome/react-fontawesome";

export default function Destination(props) {

  return (

    <div>
      <p> Destination 1 </p>
      <img alt="travelImage" src={props.image} />

      <LikeButtons onLike={props.onLike} onDislike={props.onDislike} />
      <p> Likes: {props.likes} </p>
      <p> Dislikes: {props.dislikes} </p>
    </div>

  );

};
