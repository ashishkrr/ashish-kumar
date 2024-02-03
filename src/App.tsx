import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
