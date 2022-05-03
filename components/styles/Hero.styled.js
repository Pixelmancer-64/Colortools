import styled from "styled-components";
import { keyframes } from "styled-components";

const rainbowAnimation = keyframes`
    0% {
      background-position-x: 0%
    }
    100% {
      background-position-x: 50vw
    }
`;

export const Rainbow = styled.span`
  font-size: 3.5rem;
  background: linear-gradient(to right, #6666ff, #0099ff, #ec0f47, #6666ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${rainbowAnimation} 10s infinite forwards;
  background-size: 750px;
`;

export const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 5vh 0;
  gap: 2vw;
`;

export const Slogan = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
