import React from "react";
import { Container, Rainbow, Slogan, Buttons } from "../components/styles/Hero.styled";
import Navbar from "../components/App/Navbar";
import { Link, Highlited } from "../components/styles/Button.styled";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Slogan>
          Powerful tools for your <Rainbow>colorful</Rainbow> needs!
        </Slogan>
        <Buttons>
          <Highlited href="/palettes">Start now!</Highlited>
          <Link>Learn more ↓</Link>
        </Buttons>
      </Container>
    </>
  );
}

export default Home;
