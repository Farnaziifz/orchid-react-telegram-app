import React from "react";
import Sidebar from "presentation/layout/components/sidebar/sidebar";
import Content from "presentation/layout/components/content/content";
import styles from "presentation/layout/Layout.module.scss";
import { useDispatch } from "react-redux";
import { chatApi } from "resources/api/modules/chat";
import { useEffect } from "react";

function Layout({ children }) {
  const dispatch = useDispatch();
  const api = chatApi();
  useEffect(() => {
    return async () => {
      const data = await api.getChatsData();
      dispatch({ type: "chat/setChats", payload: data });
    };
  }, []);
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content> {children}</Content>
    </div>
  );
}

export default Layout;
