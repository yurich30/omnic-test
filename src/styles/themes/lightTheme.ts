const baseColors = {
  primary: '#032EDD',
  secondary: '#57565E',
  white: '#fff',
  grey: '#E6E6E6',
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
    link: {
      primary: {
        color: baseColors.primary,
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '26.82px',
      },
      secondary: {
        color: baseColors.secondary,
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19.5px',
        letterSpacing: '1px',
      },
    },
  },
  spaces: {
    s17: '17px',
    s18: '18px',
    s29: '29px',
    s36: '36px',
    s41: '41px',
    s49: '49px',
    s50: '50px',
  },
  borderRadius: {
    br4: '4px',
    br20: '20px',
  },
};

export const ThemeType = typeof lightTheme;

export default lightTheme;
