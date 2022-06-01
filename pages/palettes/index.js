import React from "react";
import PaletteList from "../../components/App/PaletteList";
import { Link } from "../../components/styles/Button.styled";
import { find } from "../../components/helpers/DB/palettes/find";
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
          {/* <Link href="/create/palette">Create palette</Link> */}
        </CenteredButtons>
        <PaletteList palettes={palettes} />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const palettes = await find();

  return {
    props: {
      palettes: palettes,
    },
  };
}