import React from "react";
import { ColorContainer, Container, Color, Title } from "../styles/MiniPalette.styled";

function MiniPalette({ colors, name }) {
  return (
    <>
      <Container as="a" href={`/palettes/${name}`}>
        <ColorContainer>
          {colors.map((e) => (
            <Color key={e.name} style={{ backgroundColor: e.color }}></Color>
          ))}
        </ColorContainer>
        <Title>{name}</Title>
      </Container>
    </>
  );
}

export default MiniPalette;
