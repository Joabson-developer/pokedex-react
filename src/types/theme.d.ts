import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background_900: string;
      background_800: string;
      background_700: string;
      background_600: string;
      text_900: string;
      text_100: string;
    };
  }
}
