// Colors
const background = {
  default: '#151E3D',
  paper: 'black',
};

const divider = '#989789';

const primary = {
  main: '#7582EB',
  light: '#666A6D',
};

const secondary = {
  main: '#F76857',
  light: '#000000',
  dark: '#808080',
};

const info = {
  main: '#808080',
};

const text = {
  primary: '#ffff',
  secondary: '#000000',
  disabled: 'rgba(255, 255, 255, 0.48)',
};

export const darkThemeOptions = {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
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
    mode: 'dark',
    primary,
    secondary,
    text,
  },
  action: {
    hover: '#f76859',
    active: '#f76860',
  },
  typography: {
    fontFamily: 'Poppins',
  },
  customGradient: 'linear-gradient(129.09deg, #F76857 1.41%, #FE4F4C 98.43%)',
  shadows: [
    'none', // 0
    '0px 0px 2px rgba(0, 0, 0, 0.25)', // 1 (your custom box shadow)
  ],
  customGradient: 'linear-gradient(129.09deg, #F76857 1.41%, #FE4F4C 98.43%)',
  gridGradient:
    'linear-gradient(29deg, rgba(16,7,64,1) 0%, rgba(53,49,49,1) 17%, rgba(8,45,84,1) 83%, rgba(5,9,34,1) 96%);',
};
