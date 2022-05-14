import IroColorPicker from "../../components/App/IroColorPicker";
import iro from "@jaames/iro";
import { useEffect } from "react";
import chroma from "chroma-js";
import {
  ColorArea,
  ColorpickerContainer,
  ColorpickerInput,
} from "../../components/styles/Colorpicker.styled";

export default function Colorpicker({
  color,
  setColor,
  inputColorString,
  setInputStringColor,
}) {
  useEffect(() => {
    const { h, s, l, a } = color;
    setInputStringColor(`hsla(${h}, ${s}%, ${l}%, ${a})`);
  }, [color]);

  return (
    <ColorpickerContainer>
      <ColorpickerInput
        type="text"
        value={inputColorString}
        onChange={(e) => {
          const value = e.target.value;
          setInputStringColor(value);
          if (chroma.valid(value)) setColor(value);
        }}
      ></ColorpickerInput>

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
