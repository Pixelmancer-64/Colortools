import styled from "styled-components";
import { keyframes } from "styled-components";

export const UtilsNavbarContainer = styled.div`
  position: relative;
  height: 6vh;
  display: flex;
  align-items: center;
  gap: 5vw;
  padding: 0 1vw;
  z-index: 99;
  background-color: #111111;
`;

export const SliderContainer = styled.div`
  width: 30%;
`;

export const SideContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2vw;
`;

const rainbowAnimation = keyframes`
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`;

export const CopyArrayButton = styled.button`
  padding: 2px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 500% 500%;
  border-radius: 30px;
  border: 0;
  color: white;

  cursor: pointer;
  &:hover {
    animation: ${rainbowAnimation} ease 18s infinite;
  }
  & > span {
    display: block;
    padding: 0.5rem 2.5rem;
    background: #111;
    border-radius: 30px;
  }
`;

export const Selectselect = styled.select`
  border: 0;
  outline: 0;
  background: none;
  -webkit-appearance: none;
  appearance: none;
  color: white;
  display: flex;
  border-bottom: 1px solid white;
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const Arrow = styled.div`
  position: absolute;
  left: 90%;
  transform: rotate( -180deg);
  transition: 250ms;

  ${SelectContainer}:hover &{
    transform: rotate( 0deg);
  }
`

export const Optionoption = styled.option`
  background-color: #111111EE;
`