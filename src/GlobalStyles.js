import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body, html, #root, .app {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
  }
`;
export default GlobalStyle;
