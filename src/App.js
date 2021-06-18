import React from 'react';
import NavBar from './components/Navs/NavBar';
import CustomThemeProvider from './components/CustomThemeProvider';
import GlobalStyle from './GlobalStyles';
function App() {
  return (
    <CustomThemeProvider>
      <CustomThemeProvider.ThemeMenu />
      <div className='App' style={{ background: '#232323', height: '100vh' }}>
        <NavBar />
      </div>
      <GlobalStyle />
    </CustomThemeProvider>
  );
}

export default App;
