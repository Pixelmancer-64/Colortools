import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  min-width: 15rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.34);
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const Rainbow = styled.span`
  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  color: transparent;
  background-clip: text;
  font-weight: 700;
`;
