import styled, { css } from "styled-components";

import { ColorEnum } from "../../theme/ThemeEnums";
import { Link } from "react-router-dom";

// NOTE: The props are shared with the Link element.
export interface TextProps {
  align?: string;
  display?: string;
  color?: ColorEnum;
  fullCaps?: boolean;
  underline?: boolean;
}

const textStyles = css<TextProps>`
  margin: 0;
  padding: 0;
  color: ${({ theme, color }) =>
    color ? `${theme.colors[color]}` : `${theme.colors.black}`};
  text-align: ${(props) => props.align || "start"};
  display: ${(props) => props.display || null};
  text-transform: ${(props) => (props.fullCaps ? "uppercase" : null)};
  text-decoration: ${(props) => (props.underline ? "underline" : null)};
`;

// NOTE: Given the same styles are shared between Heading and Text,
//       and with the use of the polymorphic prop (for example
//       <Text as='h1'> .. </Text>), it isn't necessary to declare
//       2 differente components here.
//
//       Nevertheless, it can still be worth having both components
//       for readability reasons within the JSX: it's important to
//       quickly be able to differentiate headers from paragraphs.

export const Text = styled.p<TextProps>`
  ${textStyles}
`;

export const TextLink = styled(Link)<TextProps>`
  ${textStyles}
  font-weight: 600;
  text-decoration: underline;
`;

export const Heading = styled.h1<TextProps>`
  ${textStyles}
  // TODO: Not sure if this causes accessibility issues, it's just cleaner in the UI IMO.
  cursor: default;
`;
