// Colors
const background = {
  default: '#E1EBEE',
};

const divider = '#E6E8F0';

const primary = {
  main: '#5048E5',
  light: '#E5E7EB',
};

const secondary = {
  main: '#F76857',
  light: '#ffffff',
  dark: '#000000',
};

const info = {
  main: '#808080',
  light: '59515E',
};

const text = {
  primary: '#121828',
  secondary: '#000000',
};

export const lightThemeOptions = {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        borderRadius: '30',
        input: {
          '&::placeholder': {
            opacity: 2,
            color: info.main,
          },
        },
        root: {
          '&:before, &:after': {
            borderBottom: `none`,
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: `none`,
          },
          '&.Mui-focused:after': {
            borderBottom: `none`,
          },
        },
      },
    },
  },
  palette: {
    background,
    divider,
    info,
    mode: 'light',
    primary,
    secondary,
    text,
  },
  typography: {
    fontFamily: 'Poppins',
  },
  action: {
    hover: '#f76859',
    active: '#f76860',
  },
  shadows: [
    'none', // 0
    '0px 0px 2px rgba(0, 0, 0, 0.25)', // 1 (your custom box shadow)
  ],
  customGradient: 'linear-gradient(129.09deg, #F76857 1.41%, #FE4F4C 98.43%)',

  gridGradient:
    'linear-gradient(50deg,  rgba(239,237,247,1) 3%, rgba(254,254,254,1) 14%, rgba(249,249,249,1) 75%, rgba(255,231,243,1) 100%, rgba(255,254,254,1) 100%, rgba(255,227,241,1) 100%)',
};
