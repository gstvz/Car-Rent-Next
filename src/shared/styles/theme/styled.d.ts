import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background_primary: string;
      background_card: string;
      background_input: string;
      background_slide: string;
      button_primary: string;
      button_light: string;
      gradient_background: string;
      gradient_card: string;
      option_dot: string;
      text_default: string;
      text_light: string;
    };
    fontWeights: {
      light_300: string;
      regular_400: string;
      medium_500: string;
      regular_700: string;
    };
  }
}
