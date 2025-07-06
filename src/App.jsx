// App.jsx or index.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
//import Header from "./components/Header";
import MedicalHome from "./components/MedicalHome";
import About from "./components/About";
//import Photos from "./components/Photos";
import Contact from "./components/Contact";
import Logo from "./components/Logo";

const App = () => {
  return (
    <HashRouter>
    
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MedicalHome />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Logo />
      </div>
    </HashRouter>
  );
};

export default App;
