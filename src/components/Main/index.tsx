import styled from "styled-components";

interface MainProps {
  color: string;
}

export const Main = styled.div<MainProps>`
  min-height: 100vh;
  background: ${(props) => props.color};
  padding: 50px;
`;
