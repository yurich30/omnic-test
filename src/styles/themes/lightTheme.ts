const baseColors = {
  primary: '#032EDD',
  white: '#fff',
  gradient: 'linear-gradient(90deg, #011461 23.89%, #032EDD 93.33%)',
  fontColor: '#000',
  fontColorSecondary: '#57565E',
};

const lightTheme = {
  colors: {
    ...baseColors,
    button: {
      primary: {
        color: baseColors.white,
      },
      secondary: {
        color: baseColors.primary,
      },
    },
  },
  spaces: {
    s17: '17px',
    s36: '36px',
    s50: '50px',
  },
  borderRadius: {
    br4: '4px',
  },
};

export const ThemeType = typeof lightTheme;

export default lightTheme;
