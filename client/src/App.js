import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Results from "./pages/Results";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/Results" element={<Results />}  />
      <Route path="/Details" element={<Details />}  />
    </Routes>
  );
}

export default App;