import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageComponent from "./components/assignment3";
import CounterComponent from "./components/assignment5";
import GithubRepoPage from "./components/assignment4"
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageComponent />} />
        <Route path="/assignment5" element={<CounterComponent />} />
        <Route path="/assignment4" element={<GithubRepoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
