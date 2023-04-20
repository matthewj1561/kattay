import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMousePosition from "./hooks/useMousePosition";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Pics from "./pages/Pics";
import { useEffect, useRef } from "react";

function App() {
  const { clientX, clientY } = useMousePosition();
  return (
    <>
      <div className="frame">
        <div className="cursor" style={{ left: clientX, top: clientY }}>
          <div className="finger"></div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="/pics" element={<Pics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
