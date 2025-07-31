// components/Glow1.jsx
import React from "react";
import "./Glow.css";

import col from "../assets/col.jpg";
import nas from "../assets/nas.webp";
import zin from "../assets/zin.avif";
import hor from "../assets/hor.jpeg";
import sep from "../assets/sep.webp";
import wik from "../assets/wik.jpg";
import gri from "../assets/gri.avif";

const Glow1 = () => {
  const items = [
    { img: col, name: "Colicaid Drops" },
    { img: nas, name: "Nasoclear Saline Drops" },
    { img: zin, name: "Zincovit Syrup" },
    { img: hor, name: "Junior Horlicks" },
    { img: sep, name: "Septilin Syrup (Himalaya)" },
    { img: wik, name: "Wikoryl Syrup" },
    { img: gri, name: "Gripe Water" }
  ];

  const fullList = [...items, ...items]; // Duplicate for infinite scroll effect

  return (
    <div className="daily-container">
      <h1>Baby & Child Care Medicines</h1>
      <h1>बच्चों और शिशुओं की देखभाल की दवाएं</h1>

      <div className="daily-scroll-wrapper">
        <div className="daily-scroll">
          {fullList.map((item, index) => (
            <div className="daily-card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glow1;
