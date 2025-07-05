import React from "react";
import "./MedicalHome.css";
import Header from "./Header";
import bgVideo from "../assets/Background-video.mp4"; // ✅ Ensure this exists

const MedicalHome = () => {
  return (
    <div className="background-section">
      <Header />

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
