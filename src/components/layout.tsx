/** @jsx jsx */
/// <reference types="@emotion/react/types/css-prop" />

import React, { Component } from "react";
import { css, jsx } from "@emotion/react";
import Header from "./Header"
import { Footer } from 'mapc-design-system/src';
import { themeColors } from '../utils/theme';

type LayoutProps = {
  children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <React.Fragment>
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
