import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

import SfProRegular from 'assets/fonts/SF-Pro-Text-Regular.otf';
import SfProMedium from 'assets/fonts/SF-Pro-Text-Medium.otf';
import SfProSemiBold from 'assets/fonts/SF-Pro-Text-Semibold.otf';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url(${SfProRegular}) format("opentype");
    font-weight: normal;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url(${SfProMedium}) format("opentype");
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'SF Pro Text';
    src: url(${SfProSemiBold}) format("opentype");
    font-weight: 700;
  }

  body {
    line-height: 1.4285714286;
    font-size: 14px;
    color: ${colors.darkGunmetal};
    font-family: 'SF Pro Text', serif;
  }
`;

export { GlobalStyle };
