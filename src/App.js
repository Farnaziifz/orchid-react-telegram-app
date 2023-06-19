import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/presentation/layout/Layout";
import Home from "../src/presentation/pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
