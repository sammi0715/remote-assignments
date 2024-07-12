import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageComponent from "./components/assignment3";
import CounterComponent from "./components/assignment5"; // 假设你有另一个页面组件

function App() {
  return (
    <Router>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <Routes>
        <Route path="/" element={<><PageComponent /></>} />
        <Route path="/assignment5" element={
          <CounterComponent />} />
      </Routes>

    </Router>
  );
}

export default App;
