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
  size: ButtonSizeEnum;
}

export default function Button({ children, size }: Props) {
  return <ButtonStyled size={size}>{children}</ButtonStyled>;
}
