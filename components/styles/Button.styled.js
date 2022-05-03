import styled from "styled-components";

export const Link = styled.a`
  color: #4A74FF;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  border: 2px solid #4A74FF;
  border-radius: 6px;
  background: none;
  transition: 150ms filter;
  cursor: pointer;
  &:hover {
    filter: brightness(90%)
  }
`;

export const Highlited = styled(Link)`
    color: white;
    background-color: #4A74FF;
`

export const Button = styled.button`

`
