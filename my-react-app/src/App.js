import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Twitter from "./pages/Twitter.tsx";
import Instagram from "./pages/Instagram.tsx";
import Home from "./Components/Home.js";
import Story from "./pages/Story.tsx";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/instagram" element={<Instagram/>} />
        <Route path="/twitter" element={<Twitter/>} />
        <Route path="/story" element={<Story/>} />

        <Route path="/" element={<Home/>} />
      </Routes>
    </div> 
  );
}

export default App;
