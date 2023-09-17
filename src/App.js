import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Errorpage from "./Pages/Errorpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
