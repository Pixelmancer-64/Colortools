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

export const ColorpickerInput = styled.input`
  color: white;
  background: none;
  border: none;
  outline: none;
`;
// export const ColorpickerInputContainer = styled.div`
//   &:after {
//     display: block;
//     content: "";
//     border-bottom: 2px solid hsla(180, 2%, 67%, 1);
//     transform: scaleX(0);
//     transition: transform 250ms ease-in-out;
//   }

//   &:hover{
//     &:after{
//       transform: scaleX(1);
//     }
//   }

//   ${ColorpickerInput}:focus{
//     &:after{
//       transform: scaleX(1);
//     }
//   }

// `;
