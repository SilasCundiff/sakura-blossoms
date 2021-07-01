import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    ${({ theme }) => `background: ${theme.colors.secondaryColor};`}
    }
  
  body, .app {
    margin: 0;
    padding: 0;    
  }

  a {
    color: inherit;
  }
`;
export default GlobalStyle;
