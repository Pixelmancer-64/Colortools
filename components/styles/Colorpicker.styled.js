import styled from "styled-components";

export const ColorpickerContainer = styled.div`
  background-color: ${(bgColor) => bgColor};
  display: flex;
  flex-direction: column;
  gap: 3vh;
  align-items: center;
  height: 100%;
  padding-bottom: calc(2rem + 10px);
`;

export const ColorArea = styled.div`
  flex: 1;
  width: 35%;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 0 10px white;
`;

export const ColorpickerInput = styled.input`
  margin-top: 2rem; 
  color: white;
  background: none;
  border: 1px solid white;
  padding: 0.5rem;
  
  &:focus{
    outline: 3px solid white;
  }
`;
