import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Theme } from './theme';
import { theme as defaultTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';

export const ShaleTheme: React.FC<{ theme?: Theme, children: React.ReactNode }> = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
