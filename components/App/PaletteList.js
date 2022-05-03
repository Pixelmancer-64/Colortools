import React from "react";
import { Container } from "../styles/PaletteList.styled";
import MiniPalette from "./MiniPalette";

function PaletteList({ palettes }) {
  return (
    <>
      <Container>
        {palettes.map((e) => (
          <MiniPalette
            key={e.name}
            colors={e.colors}
            name={e.name}
          />
        ))}
      </Container>
    </>
  );
}

export default PaletteList;
