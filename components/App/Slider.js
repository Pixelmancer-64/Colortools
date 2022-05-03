import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
  SliderMarker,
} from "@reach/slider";
import "@reach/slider/styles.css";

export default function Slider({min, max, step, onChange}) {
  return (
    <SliderInput min={min} max={max} step={step} defaultValue={500} onChange={onChange}>
      {" "}
      <SliderTrack>
        {" "}
        <SliderRange /> <SliderMarker value={500} /> <SliderHandle />{" "}
      </SliderTrack>{" "}
    </SliderInput>
  );
}
