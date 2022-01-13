import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const LikeButtons = function(props) {

  return (

    <div>
      <button onClick={props.onLike}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button onClick={props.onDislike}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );

};

export default LikeButtons;