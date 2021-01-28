import React from "react"
import Header from "./header"
import { Footer} from 'mapc-design-system/src';
import { themeColors } from './../utils/colors';

const Layout = ({ children }) => (
  <>
    <Header siteTitle="MAPC Housing Markets" />
    <main>
      {children}
    </main>
    <Footer backgroundColor={themeColors.bgPurple} />
  </>
);

export default Layout;
