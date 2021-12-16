const { useState } = require("react");

const Sports = function(props) {
  const [favorite, setFavorite] = useState("Please select your Favorite Sport");

  const list = props.sports.map(sport => {
    return <button onClick={() => setFavorite(sport)}>{sport}</button>;
  });

  return (
    <>
      {list}
      <h2>{favorite}</h2>
    </>
  );
};

export default Sports;