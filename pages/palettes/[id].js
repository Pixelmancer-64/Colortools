import { useState, useEffect } from "react";
import Colorbox from "../../components/App/Colorbox";
import UtilsNavbar from "../../components/App/UtilsNavbar";
import {
  ColorsContainer,
  Container,
  Footer,
} from "../../components/styles/Palette.styled";
import { generatePalette } from "../../components/helpers/Color.helper";

export async function getStaticPaths() {
  const response = await (
    await fetch("http://localhost:3000/api/palettes/find")
  ).json();
  return {
    paths: response.map((e) => {
      return {
        params: {
          id: e.name,
        },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const palette = await (
    await fetch(`http://localhost:3000/api/palettes/findOne?name=${id}`)
  ).json();

  return {
    props: {
      palette: generatePalette(palette),
    },
  };
}

function Palette({ palette, openAlert }) {
  const [format, setFormat] = useState("rgb");
  const [level, setlevel] = useState(500);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const colorsArray = palette.colors[level].map((e) => e[format]);
    setArray(colorsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format, level]);

  return (
    <Container>
      <UtilsNavbar
        setLevel={setlevel}
        setFormat={setFormat}
        format={format}
        array={array}
        openAlert={openAlert}
      />
      <ColorsContainer>
        {palette.colors[level].map((color) => (
          <Colorbox
            key={color.name}
            name={color.name}
            color={color[format]}
            level={level}
            openAlert={openAlert}
            format={format}
          />
        ))}
      </ColorsContainer>
      <Footer>
        <h2>{palette.name}</h2>
      </Footer>
    </Container>
  );
}

export default Palette;
