import React from "react";
import PaletteList from "../../components/App/PaletteList";
import { Link } from "../../components/styles/Button.styled";
import {
  Container,
  CenteredButtons,
} from "../../components/styles/Palettes.styled";

export default function Palettes({ palettes }) {
  return (
    <div>
      <Container>
        <CenteredButtons>
          <Link href="/colorpicker">Colorpicker</Link>
          <Link href="/create/palette">Create palette</Link>
        </CenteredButtons>
        <PaletteList palettes={palettes} />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const palettes = await (
    await fetch("http://localhost:3000/api/palettes/find")
  ).json();

  return {
    props: {
      palettes,
    },
  };
}