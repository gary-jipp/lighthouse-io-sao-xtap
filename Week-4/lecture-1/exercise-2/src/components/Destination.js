import LikeButtons from "./LikeButtons";

const Destination = function(props) {

  return (
    <div>
      <p> Destination 1 </p>
      <img alt="travelImage" src={props.image} />
      <LikeButtons onLike={props.onLike} onDislike={props.onDislike}></LikeButtons>
      <p> Likes: {props.likes} </p>
      <p> Dislikes: {props.dislikes} </p>
    </div>
  );
};

export default Destination;
