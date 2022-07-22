import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes/lightTheme';

const GlobalStyles = createGlobalStyle<{
  // @ts-ignore
  theme: ThemeType;
}>`
  body {
    font-family: 'Montserrat';
  }
  
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39.01px;
  }  
  
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 26.82px;
  }
  
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 26.82px;
  }
  
  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24.38px;
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    letter-spacing: 1px;
  }

  button {
    font-weight: 700;
    font-size: 20px;
    line-height: 25.6px;
  }
  
  li {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export default GlobalStyles;
