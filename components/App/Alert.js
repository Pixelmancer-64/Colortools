import { Container, Text } from "../styles/Alert.styled";

let hi;

export default function Alert({ text, visible, setToggle }) {
  function close() {
    clearTimeout(hi)
    hi = setTimeout(() => setToggle(false), 3000);
  }

  close();

  return visible ? (
    <Container>
      <Text>{text}</Text>
    </Container>
  ) : null;
}
