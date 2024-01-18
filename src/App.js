import "./App.css";

import { Flex, Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ClubPage from "./pages/ClubPage";
const { Content, Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ height: 80 }}>
          <Navbar />
        </Header>
        <Content>
          <Flex style={{ minHeight: "100vh" }} justify="center">
            <Routes>
              <Route path="/prova-web" element={<HomePage />} />
              <Route path="/clubs/:clubId" element={<ClubPage />} />
            </Routes>
          </Flex>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
