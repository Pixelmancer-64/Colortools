import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ColorContainer = styled.div`
  background-color: white;
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
`;

export const Color = styled.div`
  flex-basis: 20%;
  flex-grow: 1;
`;

export const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
`
