import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/presentation/layout/Layout";
import Home from "../src/presentation/pages/home/home";
import Chat from "../src/presentation/pages/chat/chat";

function App() {
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
