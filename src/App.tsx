import styled from "styled-components";
import "./App.css";
import { Button } from "./components/Button";
import { Main } from "./components/Main";
import { colors } from "./components/Main/model";
import { useState } from "react";

const StyledH2 = styled.h2`
  margin: 10px 0;
  font-size: 25px;
`;

function App() {
  const [bgColor, setBgColor] = useState<string>("#fff");
  const changeColor = () => {
    const amountOfColor: number = colors.length;
    const randomNum: number = Math.floor(Math.random() * amountOfColor);
    setBgColor(colors[randomNum]);
  };
  return (
    <Main color={bgColor}>
      <StyledH2>Change color for background</StyledH2>
      <Button onClick={changeColor}>Click</Button>
      <StyledH2>Now color is {bgColor}</StyledH2>
    </Main>
  );
}

export default App;
