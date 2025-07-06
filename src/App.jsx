import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MedicalHome from "./components/MedicalHome";
import Logo from "./components/Logo";
import About from "./components/About";
import Contact from "./components/Contact"; // ✅ Make sure About.jsx exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <MedicalHome />
            <Logo />
          </>
        } />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> {/* ✅ Route added */}
      </Routes>
    </Router>
  );
};

export default App;
