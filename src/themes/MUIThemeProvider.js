import React from 'react';
import { createTheme } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const MUIThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.themeColor);
  console.log('theme is', theme);
  const selectedTheme = createTheme({ mode: theme });
  console.log('selectedtheme is', selectedTheme);

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
export default MUIThemeProvider;
