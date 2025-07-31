// components/Daily.jsx
import React from "react";
import "./Glow.css";
import cets from "../assets/cets.jpg";
import nev from "../assets/nev.webp";
import him from "../assets/him.webp";
import lac from "../assets/lac.webp";
import bio from "../assets/bio.jpg";
import pon from "../assets/pon.jpg";
import lak from "../assets/lak.webp";
import pat from "../assets/pat.webp";
import bor from "../assets/bor.jpeg"; // Ensure this path is correct
const Daily = () => {
  const items = [
  { img: cets, name: "Cetaphil Gentle Cleanser" },
  { img: nev, name: "Nivea Soft Cream" },
  { img: him, name: "Himalaya Neem Face Wash" },
  { img: lac, name: "Lacto Calamine Lotion" },
  { img: bio, name: "Biotique Morning Nectar" },
  { img: pon, name: "Pond’s Super Light Gel" },
  { img: lak, name: "Lakme Sunscreen SPF 50" },
  { img: pat, name: "Patanjali Aloe Vera Gel" },
  { img: bor, name: "Boroplus Antiseptic Cream" }
];

  const fullList = [...items, ...items]; // Duplicate for looping

  return (
    <div className="daily-container">
      <h1>"Personal Care & Skincare"</h1>
      <h1>" व्यक्तिगत देखभाल और त्वचा की देखभाल"</h1>

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

export default Daily;
