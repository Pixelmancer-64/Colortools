import Colorpicker from "../components/App/Colorpicker" ;
import { useState } from "react";

export default function Cp() {
  const [color, setColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  const [inputColorString, setInputStringColor] = useState("");

  return (
    <>
      <Colorpicker
        color={color}
        setColor={setColor}
        inputColorString={inputColorString}
        setInputStringColor={setInputStringColor}
      />
    </>
  );
}
