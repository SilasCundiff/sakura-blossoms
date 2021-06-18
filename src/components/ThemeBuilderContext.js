import React, { createContext, useContext } from 'react';

const ThemeBuilderContext = createContext(undefined);

const ThemeBuilderProvider = ({ children, value }) => {
  return (
    <ThemeBuilderContext.Provider value={value}>
      {children}
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
