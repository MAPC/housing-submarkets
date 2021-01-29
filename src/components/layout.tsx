import React, { Component } from "react";
import Header from "./Header"
import { Footer } from 'mapc-design-system/src';
import { themeColors } from '../utils/theme';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <Header />
    <main>
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
