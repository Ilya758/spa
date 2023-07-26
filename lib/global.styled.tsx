import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
