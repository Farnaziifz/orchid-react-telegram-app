import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Content> {children}</Content>
    </div>
  );
}

export default Layout;
