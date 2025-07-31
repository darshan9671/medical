// App.jsx
import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import MedicalHome from "./components/MedicalHome";
import About from "./components/About";
import Photos from "./components/Photos";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import Present from "./components/Present";
import Daily from "./components/Daily";
import Glow from "./components/Glow";
import Glow1 from "./components/Glow1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CowMedicines from "./components/CowMedicines";

// 🔁 Renders everything inside HashRouter context
const InnerApp = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/#";

  return (
    <>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<MedicalHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* ✅ Show these sections only on Home Page */}
        {isHome && <Present />}
        {isHome && <Logo />}
        {isHome && <Daily />}
        {isHome && <Glow />}
        {isHome && <Glow1 />}
        {isHome && <CowMedicines />}
      </div>
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <InnerApp />
      <Footer />
    </HashRouter>
  );
};

export default App;
