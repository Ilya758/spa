import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0 20px;
  }

  a {
    text-decoration: none;
  }
`;
