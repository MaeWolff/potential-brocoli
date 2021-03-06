import { ReactNode } from "react";
import styled from "styled-components";

const ButtonSizeValues = {
  auto: { width: "fit-content", height: "2.5em" },
  fullWidth: { width: "100%", height: "2.5em" },
} as const;

const ButtonStyled = styled.button<Props>`
  width: ${({ size }) => ButtonSizeValues[size].width};
  height: ${({ size }) => ButtonSizeValues[size].height};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 0.5em;
  padding: 0 1em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export enum ButtonSizeEnum {
  auto = "auto",
  fullWidth = "fullWidth",
}

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  size: ButtonSizeEnum;
  handleClick?: () => void;
}

export default function Button({ children, size, type, handleClick }: Props) {
  return (
    <ButtonStyled size={size} type={type} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
}
