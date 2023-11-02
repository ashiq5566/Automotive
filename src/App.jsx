import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardRouter from "./components/routers/router/DashboardRouter";
import { styled } from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Routes>
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
	width: 100%;
`