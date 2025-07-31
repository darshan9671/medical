// components/CowCare.jsx
import React from "react";
import "./CowMedicines.css";
import cowImage from "../assets/cow.jpg";

// Sample medicines (आप अपने images/assets use करें)
import med1 from "../assets/med1.jpeg";
import med2 from "../assets/med2.webp";
import med3 from "../assets/med3.webp";
import med4 from "../assets/med4.jpg";
import med5 from "../assets/med5.jpg";
import med6 from "../assets/med6.jpg";

const items = [
  { img: med1, name: "Calcium Bolus" },
  { img: med2, name: "Mineral Mixture" },
  { img: med3, name: "Oxytocin Injection" },
  { img: med4, name: "Enrofloxacin" },
  { img: med5, name: "Uterine Bolus" },
  { img: med6, name: "Albendazole" }
];

const CowCare = () => {
  return (
    <div className="cow-container">
      {/* Left: Cow Image */}
      <div className="cow-left">
        <img src={cowImage} alt="Cow" />
      </div>

      {/* Right: Medicines */}
      <div className="cow-right">
        {items.map((item, index) => (
          <div className="medicine-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CowCare;
