import React, { createContext, useContext, useState } from 'react';
import { styleBuilder } from './ThemeBuilderHelpers/styleBuilder';
import { themeBuilder } from './ThemeBuilderHelpers/themeBuilder';
import { presetThemes } from './ThemeBuilderHelpers/PresetThemes';
import { ThemeProvider } from 'styled-components';
import { ThemeMenu } from './ThemeMenu/ThemeMenu';

const ThemeBuilderContext = createContext(undefined);

const ThemeBuilderProvider = ({ children }) => {
  const [selectedStyles, setSelectedStyles] = useState({
    ...presetThemes[Math.floor(Math.random() * presetThemes.length)],
  });

  const styles = styleBuilder(selectedStyles.presetStyles);

  const theme = themeBuilder({ ...styles });

  return (
    <ThemeBuilderContext.Provider
      value={{ theme, selectedStyles, setSelectedStyles, presetThemes }}
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

ThemeBuilderProvider.ThemeMenu = ThemeMenu;

export { ThemeBuilderProvider, useThemeBuilderContext };
