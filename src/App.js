import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Error, Login, Post, Profile, Signup, PostList } from "./components"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route login */}
        <Route path="/" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App
