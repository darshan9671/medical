// components/Daily.jsx
import React from "react";
import "./Daily.css";
import para from "../assets/para.jpg";
import cet from "../assets/cet.jpg";
import pan from "../assets/pan.jpg";
import amo from "../assets/amo.jpg";
import ibu from "../assets/ibu.jpg";
import ran from "../assets/ran.webp";
import dol from "../assets/dol.webp";
import azi from "../assets/azi.webp";
import mul from "../assets/mul.webp";
import ora from "../assets/ora.avif";
const Daily = () => {
  const items = [
     { img: para, name: "Logo 1" },
    { img: cet, name: "Cetirizine" },
    { img: pan, name: "Pantoprazole" },
    { img: amo, name: "Amoxicillin" },
    { img: ibu, name: "Ibuprofen" },
    { img: ran, name: "Ranitidine" },
    { img: dol, name: "Dolo 650" },
    { img: azi, name: "Azithromycin" },
    { img: mul, name: "Multivitamin" },
    { img: ora, name: "ORS Powder" },
  ];

  const fullList = [...items, ...items]; // Duplicate for looping

  return (
    <div className="daily-container">
      <h1>"Daily Dose of Care – For You and Your Family"</h1>
      <h1>"रोज़ की देखभाल की ख़ुराक – आपके और आपके परिवार के लिए"</h1>

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
