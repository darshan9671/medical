import React from "react";
import "./Present.css";
import bgVideo from "../assets/present.mp4";
const Present = () => {
  return (
    <div className="present-section">
      <div className="video-wrapper">
        <video
          className="presentation-video"
          controls
          autoPlay
          loop
          muted
          width="100%"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Present;
