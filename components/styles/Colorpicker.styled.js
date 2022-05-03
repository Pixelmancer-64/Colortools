import styled from "styled-components";

export const ColorpickerContainer = styled.div`
  background-color: ${(bgColor) => bgColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ColorArea = styled.div`
  height: 40%;
  width: 30%;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 0 10px white;
`;
