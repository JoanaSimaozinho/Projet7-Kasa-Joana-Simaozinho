import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components"
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route login */}
        <Route path="/" element={<Home />} />
      </Routes>t
    </div>
  );
}

export default App
