import React, { createContext, useContext, useState } from 'react';
import { styleBuilder } from '../helpers/styleBuilder';
import { themeBuilder } from '../helpers/themeBuilder';
import { ThemeProvider } from 'styled-components';

const ThemeBuilderContext = createContext(undefined);

const ThemeBuilderProvider = ({ children }) => {
  const [selectedStyles, setSelectedStyles] = useState({
    primaryHue: 'blue',
    primaryLightness: 500,
    secondaryHue: 'pink',
    secondaryLightness: 50,
    primaryFont: 'Poppins',
    primaryFontWeight: 'regular',
    secondaryFont: 'Exo',
    secondaryFontWeight: 'thin',
  });

  const styles = styleBuilder(selectedStyles);
  const theme = themeBuilder({ ...styles });
  return (
    <ThemeBuilderContext.Provider
      value={{ theme, selectedStyles, setSelectedStyles }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeBuilderContext.Provider>
  );
};

const useThemeBuilderContext = () => {
  const context = useContext(ThemeBuilderContext);
  if (context === undefined) {
    throw new Error(
      'useThemeBuilderContext must be used within a ThemeBuilderProvider'
    );
  }
  return context;
};
export { ThemeBuilderProvider, useThemeBuilderContext };
