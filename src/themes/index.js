import { createTheme as createMuiTheme } from '@mui/material/styles';
import { darkThemeOptions } from './dark-themes';
import { lightThemeOptions } from './light-themes-options';

export const createTheme = (config) => {
  let theme = createMuiTheme(
    config.mode === 'dark' ? darkThemeOptions : lightThemeOptions
  );

  return theme;
};
