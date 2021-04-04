import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary100: string;
      white: string;
      black: string;
      grey: string;
    };
  }
}
