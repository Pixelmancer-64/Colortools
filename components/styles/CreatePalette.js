import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  & button {
    align-self: center;
    width: 50%;
  }
`;

export const Colors = styled.div`
  display: flex;
  height: 20vh;
`;


export const InsertArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 5vh;
`;