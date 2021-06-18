import React, { useState } from 'react';
import { styleBuilder } from '../helpers/styleBuilder';
import { themeBuilder } from '../helpers/themeBuilder';
import { ThemeBuilderProvider } from './ThemeBuilderContext';
import { ThemeProvider } from 'styled-components';
const CustomThemeProvider = ({ children }) => {
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
    <ThemeBuilderProvider value={{ theme, selectedStyles, setSelectedStyles }}>
      <ThemeProvider theme={theme} selectedStyles={selectedStyles}>
        {children}
      </ThemeProvider>
    </ThemeBuilderProvider>
  );
};

export default CustomThemeProvider;
