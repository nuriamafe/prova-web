import "./App.css";

import { Flex, Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Content>
          <Flex style={{ minHeight: "100vh" }} justify="center" align="center">
            <Routes>
              <Route path="/prova-web" element={<HomePage />} />
            </Routes>
          </Flex>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
