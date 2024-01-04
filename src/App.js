import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import GeneratedPost from "./pages/GeneratedPost.tsx";
import Home from "./Components/Home.js";
import React from "react";

function App() {
   
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/generated" element={<GeneratedPost/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div> 
  );
}

export default App;
