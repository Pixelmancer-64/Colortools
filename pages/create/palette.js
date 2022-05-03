import IroColorPicker from "../../components/App/IroColorPicker";
import iro from "@jaames/iro";
import { useState, useEffect } from "react";
import chroma from "chroma-js";
import {
  ColorArea,
  ColorpickerContainer,
} from "../../components/styles/Colorpicker.styled";

export default function New() {
  const [color, setColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  // const [inputColor, setInputColor] = useState({ h: 159, s: 100, l: 79, a: 1 });
  const [inputColorString, setInputStringColor] = useState(
    "hsla(150,100%,50%,1)"
  );

  useEffect(() => {
    const { h, s, l, a } = color;
    setInputStringColor(`hsla(${h}, ${s}%, ${l}%, ${a})`);
  }, [color]);

  return (
    <ColorpickerContainer>
      <input
        type="text"
        value={inputColorString}
        onChange={(e) => {
          const value = e.target.value;
          setInputStringColor(value);
          if (chroma.valid(value)) setColor(value);
        }}
      />

      <IroColorPicker
        color={color}
        onColorChange={(e) => setColor(e.hsla)}
        layout={[
          {
            component: iro.ui.Wheel,
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "hue",
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "saturation",
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "value",
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "alpha",
            },
          },
        ]}
      />
      <ColorArea color={inputColorString}></ColorArea>
    </ColorpickerContainer>
  );
}
