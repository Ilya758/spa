import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string;
      cheek: string;
      bronzed: string;
      pink: string;
      logo: string;
      charcoal: string;
      borderColor: string;
      secondary: string;
      white: string;
      error: string;
    }
  }
}
