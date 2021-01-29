import React from "react"
import Header from "./Header"
import { Footer } from 'mapc-design-system/src';
import { themeColors } from './../utils/colors';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer backgroundColor={themeColors.bgPurple} />
  </>
);

export default Layout;
