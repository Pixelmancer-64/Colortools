import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 20%;
  position: relative;
  cursor: pointer;
  background-color: ${({ background }) => background};
  transition: transform 250ms;
  
  &:after {
    content: "COPIAR";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 250ms;
  }

  &:hover {
    transform: translateY(-10%);
    &:after {
      opacity: 1;
      transition: opacity 350ms;
    }
  }
`;
