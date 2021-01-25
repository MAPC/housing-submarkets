import React from "react"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header siteTitle="MAPC Housing Markets" />
    <main>
      {children}
    </main>
    <footer>
      Footer
    </footer>
  </>
);

export default Layout;
