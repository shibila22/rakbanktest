import React from 'react';
import { createTheme } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const MUIThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.themeColor);
  const selectedTheme = createTheme({ mode: theme });

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
export default MUIThemeProvider;
