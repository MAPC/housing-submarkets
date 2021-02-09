/** @jsx jsx */

import React, { Component } from "react";
import { css, jsx, Global } from "@emotion/react";
import Header from "./Header"
import { Footer } from 'mapc-design-system/src';
import { themeColors, fonts } from '../utils/theme';

type LayoutProps = {
  children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <React.Fragment>
    <Global styles={css`
      html {
        font-size: 10px;
        height: 100%;
      }

      body {
        color: ${themeColors.fontGray};
        font-family: ${fonts.swiftNeueLtPro};
        font-size: 1.6rem;
        height: 100%;
        line-height: 2.4rem;
        margin: 0;
      }

      #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
      }

      @import url("//hello.myfonts.net/count/37908e");

      @font-face {
        font-family: 'SwiftNeueLTPro';
        src: url('./fonts/SwiftNeueLTPro.eot') format('eot');
        src: local('Swift Neue LT Pro'),
            url('./fonts/SwiftNeueLTPro.eot?#iefix') format('embedded-opentype'),
            url('./fonts/SwiftNeueLTPro.woff2') format('woff2'),
            url('./fonts/SwiftNeueLTPro.woff') format('woff'),
            url('./fonts/SwiftNeueLTPro.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
      }

      @font-face {
        font-family: 'SwiftNeueLTPro';
        src: url('./fonts/SwiftNeueLTPro-Italic.eot') format('eot');
        src: local('Swift Neue LT Pro Italic'),
            url('./fonts/SwiftNeueLTPro-Italic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/SwiftNeueLTPro-Italic.woff2') format('woff2'),
            url('./fonts/SwiftNeueLTPro-Italic.woff') format('woff'),
            url('./fonts/SwiftNeueLTPro-Italic.ttf') format('truetype');
        font-style: italic;
        font-weight: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Light.eot');
        src: local('Calibre Light'), local('Calibre-Light'),
            url('./fonts/Calibre-Light.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Light.woff2') format('woff2'),
            url('./fonts/Calibre-Light.woff') format('woff'),
            url('./fonts/Calibre-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Thin.eot');
        src: local('Calibre Thin'), local('Calibre-Thin'),
            url('./fonts/Calibre-Thin.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Thin.woff2') format('woff2'),
            url('./fonts/Calibre-Thin.woff') format('woff'),
            url('./fonts/Calibre-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-LightItalic.eot');
        src: local('Calibre Light Italic'), local('Calibre-LightItalic'),
            url('./fonts/Calibre-LightItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-LightItalic.woff2') format('woff2'),
            url('./fonts/Calibre-LightItalic.woff') format('woff'),
            url('./fonts/Calibre-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-MediumItalic.eot');
        src: local('Calibre Medium Italic'), local('Calibre-MediumItalic'),
            url('./fonts/Calibre-MediumItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-MediumItalic.woff2') format('woff2'),
            url('./fonts/Calibre-MediumItalic.woff') format('woff'),
            url('./fonts/Calibre-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-BlackItalic.eot');
        src: local('Calibre Black Italic'), local('Calibre-BlackItalic'),
            url('./fonts/Calibre-BlackItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-BlackItalic.woff2') format('woff2'),
            url('./fonts/Calibre-BlackItalic.woff') format('woff'),
            url('./fonts/Calibre-BlackItalic.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Semibold.eot');
        src: local('Calibre Semibold'), local('Calibre-Semibold'),
            url('./fonts/Calibre-Semibold.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Semibold.woff2') format('woff2'),
            url('./fonts/Calibre-Semibold.woff') format('woff'),
            url('./fonts/Calibre-Semibold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Black.eot');
        src: local('Calibre Black'), local('Calibre-Black'),
            url('./fonts/Calibre-Black.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Black.woff2') format('woff2'),
            url('./fonts/Calibre-Black.woff') format('woff'),
            url('./fonts/Calibre-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Medium.eot');
        src: local('Calibre Medium'), local('Calibre-Medium'),
            url('./fonts/Calibre-Medium.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Medium.woff2') format('woff2'),
            url('./fonts/Calibre-Medium.woff') format('woff'),
            url('./fonts/Calibre-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-RegularItalic.eot');
        src: local('Calibre Regular Italic'), local('Calibre-RegularItalic'),
            url('./fonts/Calibre-RegularItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-RegularItalic.woff2') format('woff2'),
            url('./fonts/Calibre-RegularItalic.woff') format('woff'),
            url('./fonts/Calibre-RegularItalic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-BoldItalic.eot');
        src: local('Calibre Bold Italic'), local('Calibre-BoldItalic'),
            url('./fonts/Calibre-BoldItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-BoldItalic.woff2') format('woff2'),
            url('./fonts/Calibre-BoldItalic.woff') format('woff'),
            url('./fonts/Calibre-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Bold.eot');
        src: local('Calibre Bold'), local('Calibre-Bold'),
            url('./fonts/Calibre-Bold.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Bold.woff2') format('woff2'),
            url('./fonts/Calibre-Bold.woff') format('woff'),
            url('./fonts/Calibre-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Regular.eot');
        src: local('Calibre'), local('Calibre-Regular'),
            url('./fonts/Calibre-Regular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Regular.woff2') format('woff2'),
            url('./fonts/Calibre-Regular.woff') format('woff'),
            url('./fonts/Calibre-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-SemiboldItalic.eot');
        src: local('Calibre Semibold Italic'), local('Calibre-SemiboldItalic'),
            url('./fonts/Calibre-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-SemiboldItalic.woff2') format('woff2'),
            url('./fonts/Calibre-SemiboldItalic.woff') format('woff'),
            url('./fonts/Calibre-SemiboldItalic.ttf') format('truetype');
        font-weight: 600;
        font-style: italic;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-ThinItalic.eot');
        src: local('Calibre Thin Italic'), local('Calibre-ThinItalic'),
            url('./fonts/Calibre-ThinItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-ThinItalic.woff2') format('woff2'),
            url('./fonts/Calibre-ThinItalic.woff') format('woff'),
            url('./fonts/Calibre-ThinItalic.ttf') format('truetype');
        font-weight: 100;
        font-style: italic;
      }`}
    />
    <Header />
      <main {...props}>
        {children}
      </main>
      <Footer
        backgroundColor={themeColors.bgPurple}
        fontColor={themeColors.white}
        paddingLeft={50}
        paddingRight={50}
        maxWidth={1366}
      />
  </React.Fragment>
);

export default Layout;
