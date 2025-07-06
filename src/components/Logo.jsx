import React from "react";
import "./Logo.css";

// ✅ Only filenames here – no /assets/ if inside public/
const logos = [
  { img: "logo11.jpeg", name: "Logo 1" },
  { img: "logo22.png", name: "Logo 2" },
  { img: "logo33.png", name: "Logo 3" },
  { img: "logo44.png", name: "Logo 4" },
  { img: "logo55.png", name: "Logo 5" },
  { img: "logo66.png", name: "Logo 6" },
  { img: "logo77.png", name: "Logo 7" },
  { img: "logo88.png", name: "Logo 8" },
  { img: "logo99.png", name: "Logo 9" },
];

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <h1 className="logo-heading">
        India's trusted pharma brands – for your better health <br />
        भारत के विश्वसनीय फार्मा ब्रांड – आपके बेहतर स्वास्थ्य के लिए
      </h1>
      <div className="logo-marquee">
        <div className="logo-track">
          {logos.map((logo, idx) => (
            <div className="logo-item" key={idx}>
              {/* ✅ Correct image path using PUBLIC_URL */}
              <img
                src={`${process.env.PUBLIC_URL}/${logo.img}`}
                alt={logo.name}
              />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
