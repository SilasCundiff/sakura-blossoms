import React from 'react';
import NavBar from './components/Navs/NavBar';
import { ThemeBuilderProvider } from './components/ThemeBuilder/ThemeBuilderContext';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';

import Playground from './components/Playground/Playground';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const StyledApp = styled.div`
  background: ${(props) => props.theme.colors.secondaryHex};
`;

function App() {
  return (
    <ThemeBuilderProvider>
      <ThemeBuilderProvider.ThemeMenu />
      <StyledApp className='app'>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/playground'>
              <Playground />
            </Route>
          </Switch>
        </BrowserRouter>
      </StyledApp>
      <GlobalStyle />
    </ThemeBuilderProvider>
  );
}

export default App;
