import React from 'react';
import NavBar from './components/Navs/NavBar';
import { ThemeBuilderProvider } from './components/ThemeBuilder/ThemeBuilderContext';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import SilvanusDesignsLogo from './components/Logos/SilvanusDesignsLogo';
import Home from './pages/Home';
import Footer from './components/Footers/Footer';

const StyledApp = styled.div`
  background: ${(props) => props.theme.colors.secondaryHex};
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .copyright {
      padding: 1rem;
      margin-bottom: 2rem;
    }

    & .SilvanusDesigns a {
      display: flex;
      align-items: center;
      padding: 1rem;
      text-align: center;
      margin: 0 1rem;
    }
  }
`;

function App() {
  return (
    <ThemeBuilderProvider>
      <ThemeBuilderProvider.ThemeMenu />
      <StyledApp className='app'>
        <NavBar />
        <Home id='Home' />
        <Footer className='footer'>
          <div className='copyright'>copyright SakuraSeeds&copy; 2021</div>
          <div className='SilvanusDesigns'>
            <a href='https://silvanusdesign.com'>
              Designed and Developed by Silas Cundiff at SilvanusDesign.com{' '}
              <SilvanusDesignsLogo className='SilvanusLogo' />
            </a>
          </div>
        </Footer>
      </StyledApp>
      <GlobalStyle />
    </ThemeBuilderProvider>
  );
}

export default App;
