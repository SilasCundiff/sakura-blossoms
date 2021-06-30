import React from 'react';
import NavBar from './components/Navs/NavBar';
import { ThemeBuilderProvider } from './components/ThemeBuilder/ThemeBuilderContext';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';

import Home from './pages/Home';

const StyledApp = styled.div`
  background: ${(props) => props.theme.colors.secondaryHex};
`;

function App() {
  return (
    <ThemeBuilderProvider>
      <ThemeBuilderProvider.ThemeMenu />
      <StyledApp className='app'>
        <NavBar />
        <Home />
      </StyledApp>
      <GlobalStyle />
    </ThemeBuilderProvider>
  );
}

export default App;
