import Colorpicker from "../../components/App/Colorpicker";
import { useState, useEffect } from "react";
import Colorbox from "../../components/App/Colorbox";
import { Button } from "../../components/styles/Button.styled";
import {
  Container,
  Colors,
  InsertArea,
} from "../../components/styles/CreatePalette";

export default function New() {
  const [color, setColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  const [title, setTitle] = useState("");
  const [inputColorString, setInputStringColor] = useState("");
  const [colorsArray, setcolorsArray] = useState([]);

  // useEffect(() => {
  //   setcolorsArray([...colorsArray, inputColorString]);
  // }, [inputColorString]);

  function add() {
    setcolorsArray([...colorsArray, inputColorString]);
  }

  async function save(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/api/palettes/add", {
      method: "POST",
      headers: { "Content-Type": "applicaton/json" },
      body: JSON.stringify({
        name: title,
        colors: colorsArray,
      }),
    });
  }

  return (
    <Container>
      <InsertArea>
        <Colorpicker
          color={color}
          setColor={setColor}
          inputColorString={inputColorString}
          setInputStringColor={setInputStringColor}
        />
        <Button onClick={add}>Click ME!</Button>
        <form onSubmit={save}>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <button>ADD ME</button>
        </form>
      </InsertArea>
      <Colors>
        {colorsArray.map((color) => (
          <Colorbox
            key={color}
            name={color}
            color={color}
            level={500}
            openAlert={() => console.log("hi")}
            format={"hex"}
          />
        ))}
      </Colors>
    </Container>
  );
}
