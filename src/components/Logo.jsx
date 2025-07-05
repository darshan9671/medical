import React from "react";
import "./Logo.css";

// Add your client names and image filenames (put logos in public/images)
const logos = [
  { img: "/logo1.jpeg", name: "Logo 1" },
  { img: "/logo2.jpeg", name: "Logo 2" },
  { img: "/logo3.jpeg", name: "Logo 3" },
  { img: "/logo4.png", name: "Logo 4" },
  { img: "/logo5.png", name: "Logo 5" },
  { img: "/logo6.jpeg", name: "Logo 6" },
  { img: "/logo7.jpeg", name: "Logo 7" },
  { img: "/logo8.png", name: "Logo 8" },
  { img: "/logo9.jpeg", name: "Logo 9" },
  { img: "/logo10.jpeg", name: "Logo 10" },
  { img: "/logo11.jpeg", name: "Logo 11" },
  { img: "/logo12.jpeg", name: "Logo 12" },
  { img: "/logo13.jpeg", name: "Logo 13" },
  { img: "/logo14.jpeg", name: "Logo 14" },
  { img: "/logo15.png", name: "Logo 15" },
  { img: "/logo16.jpeg", name: "Logo 16" },
  { img: "/logo17.jpeg", name: "Logo 17" },
  { img: "/logo18.png", name: "Logo 18" },
  { img: "/logo19.png", name: "Logo 19" },
  { img: "/logo20.png", name: "Logo 20" },
  { img: "/logo7.jpeg", name: "Logo 21" },
];

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <h1 className="logo-heading">India's trusted pharma brands – for your better health <br />भारत के विश्वसनीय फार्मा ब्रांड – आपके बेहतर स्वास्थ्य के लिए</h1>
      <div className="logo-marquee">
        <div className="logo-track">
          {logos.map((logo, idx) => (
            <div className="logo-item" key={idx}>
              <img src={logo.img} alt={logo.name} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;