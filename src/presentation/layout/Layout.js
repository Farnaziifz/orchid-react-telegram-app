import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content> {children}</Content>
    </div>
  );
}

export default Layout;
