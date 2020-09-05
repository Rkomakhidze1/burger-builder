import React from "react";
import classes from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div>header navbar and so on</div>
      <main className={classes.Content}>{children}</main>
    </div>
  );
};

export default Layout;
