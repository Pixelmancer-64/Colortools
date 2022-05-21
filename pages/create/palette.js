import Colorpicker from "../../components/App/Colorpicker";
import { useState } from "react";
import Colorbox from "../../components/App/Colorbox";
import { Button } from "../../components/styles/Button.styled";
import {
  Container,
  Colors,
  InsertArea,
  TextInput,
  Center
} from "../../components/styles/CreatePalette";
import { server } from "../../config/server";

export default function New() {
  const [color, setColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  const [title, setTitle] = useState("");
  const [inputColorString, setInputStringColor] = useState("");
  const [colorsArray, setcolorsArray] = useState([]);

  function add() {
    setcolorsArray([...colorsArray, inputColorString]);
  }

  async function save(e) {
    e.preventDefault();
    await fetch(server + "/api/palettes/add", {
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
        <Button onClick={add}>Add color</Button>
        <Center>
          <form onSubmit={save}>
            <TextInput type="text" onChange={(e) => setTitle(e.target.value)} />
            <Button>Submit palette</Button>
          </form>
        </Center>
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
