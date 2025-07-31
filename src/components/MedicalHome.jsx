import React from "react";
import "./MedicalHome.css";
import Header from "./Header";
import bgVideo from "../assets/Background-video1.mp4"; // ✅ Ensure this exists
import Present from "./Present";
import Logo from "./Logo";
import { HashRouter } from "react-router-dom";
const MedicalHome = () => {
  return (
    <div className="background-section">
      <div className="background-content">
        <video autoPlay loop muted className="background-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      </div>
  );
};

export default MedicalHome;
