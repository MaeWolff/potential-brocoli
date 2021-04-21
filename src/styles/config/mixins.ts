import { css } from "styled-components";

export const BackgroundPrimaryText = css`
  background-color: ${({ theme }) => theme.colors.primary100};
  padding: 0em 0.25em;
  border-radius: 8px;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
