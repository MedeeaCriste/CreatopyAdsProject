import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Home.js";
import { Routes, Route } from "react-router-dom";
import Instagram from "./pages/Instagram.tsx";
import Home from "./Components/Home.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/instagram" element={<Instagram/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div> 
  );
}

export default App;
