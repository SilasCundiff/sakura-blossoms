import React from 'react';
import NavBar from './components/Navs/NavBar';
import { ThemeBuilderProvider } from './components/ThemeBuilder/ThemeBuilderContext';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.secondaryColor};
`;

function App() {
  return (
    <ThemeBuilderProvider>
      <ThemeBuilderProvider.ThemeMenu />

      <StyledApp>
        <NavBar />
      </StyledApp>
      <GlobalStyle />
    </ThemeBuilderProvider>
  );
}

export default App;
