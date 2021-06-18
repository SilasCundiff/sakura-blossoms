import React, { useState } from 'react';
import { styleBuilder } from '../helpers/styleBuilder';
import { themeBuilder } from '../helpers/themeBuilder';
import { ThemeBuilderProvider } from './ThemeBuilderContext';
import { ThemeProvider } from 'styled-components';
import { ThemeMenu } from './ThemeMenu/ThemeMenu';

const CustomThemeProvider = ({ children }) => {
  const [selectedStyles, setSelectedStyles] = useState({
    primaryHue: 'gray',
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
    <ThemeBuilderProvider value={{ selectedStyles, setSelectedStyles }}>
      <ThemeProvider
        theme={theme}
        value={{ selectedStyles, setSelectedStyles }}
      >
        {children}
      </ThemeProvider>
    </ThemeBuilderProvider>
  );
};

CustomThemeProvider.ThemeMenu = ThemeMenu;

export default CustomThemeProvider;
