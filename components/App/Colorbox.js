import React from "react";
import { Container } from "../styles/Colorbox.styled";
import chroma from "chroma-js";
import CopyToClipBoard from "../helpers/CopyToClipboard";
import { Rainbow } from "../styles/Alert.styled";

function Colorbox({ name, color, openAlert, format }) {
  //     const { name, background, showLink } = this.props;
  //     const relativeColor = chroma(background).luminance() > 0.3 ? 0 : 255;
  //     const opositeColor = chroma(background).luminance() > 0.3 ? 255 : 0;

  //     const color = {
  //       color: `rgb(${relativeColor}, ${relativeColor}, ${relativeColor})`,
  //     };

  //     const colorWithBackground = {
  //       ...color,
  //       background: `rgba(${opositeColor}, ${opositeColor}, ${opositeColor}, .4)`,
  //     };

  return (
    <Container
      background={color}
      onClick={() => {
        CopyToClipBoard(color),
          openAlert(
            <>
              Color copied! format: <Rainbow>{format}</Rainbow>
            </>
          );
      }}
    >
      <div className="copy-container">
        <span>{name}</span>
      </div>
    </Container>
  );
}

export default Colorbox;
