import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/presentation/layout/Layout";
import Home from "../src/presentation/pages/home/home";
import Chat from "../src/presentation/pages/chat/chat";
import { useDispatch } from "react-redux";
import { chatApi } from "./resources/api/modules/chat";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const api = chatApi()
  useEffect(() => {
    return async () => {
      const data = await api.getChatsData()
      dispatch({ type: "chat/setChats", payload: data });
    };
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
