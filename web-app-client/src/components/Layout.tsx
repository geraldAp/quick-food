import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <Navbar />
      {children}
    </body>
  );
};

export default Layout;
