import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button`
  background: #fff;
  color: #000;
  font-size: 15px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  max-height: fit-content;

  &:hover {
    background: #000;
    border-color: #fff;
    color: #fff;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
