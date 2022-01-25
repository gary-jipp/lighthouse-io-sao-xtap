import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "App.css";

export default function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const url = `https://random-data-api.com/api/color/random_color?size=8`;

  const getData = useCallback(
    () => {
      axios.get(url)
        .then((result) => setColors(result.data));
    }, [url]);

  useEffect(() => getData(), [getData]);

  const onClick = function() {
    getData();
    setSelectedColor("white");
  };

  const colorMap = colors.map((color) => (
    <div className="colorMap">
      <p>{color.hex_value}</p>
      <div
        className="boxBorder"
        data-testid="color"
        style={{ backgroundColor: color.hex_value }}>
      </div>

      <button onClick={() => setSelectedColor(color.hex_value)}>
        Set BG Color
      </button>

    </div>
  ));


  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <h2> Background Color Picker </h2>
      <button className="refetchBtn" onClick={onClick}>
        Get New Colors
      </button>

      <br />
      {colorMap}
      <br />
    </div>
  );
}
