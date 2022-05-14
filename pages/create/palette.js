import Colorpicker from "../../components/App/Colorpicker";
import { useState, useEffect } from "react";
import Colorbox from "../../components/App/Colorbox";

export default function New() {
  const [color, setColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  const [inputColorString, setInputStringColor] = useState(
    ""
  );
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    setColorArray([...colorArray, inputColorString]);
  }, [inputColorString]);

  return (
    <div>
      <Colorpicker
        color={color}
        setColor={setColor}
        inputColorString={inputColorString}
        setInputStringColor={setInputStringColor}
      />
      {colorArray.map((color) => (
        <Colorbox
          key={color}
          name={color}
          color={color}
          level={500}
          openAlert={() => console.log("hi")}
          format={"hex"}
        />
      ))}
    </div>
  );
}
