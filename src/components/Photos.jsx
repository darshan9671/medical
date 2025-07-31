// components/Photos.jsx
import React from "react";
import "./Photos.css";

// Import all images (example)
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";

const photos = [
  { src: p1, alt: "Photo 1" },
  { src: p2, alt: "Photo 2" },
  { src: p3, alt: "Photo 3" },
  { src: p4, alt: "Photo 4" },
  { src: p5, alt: "Photo 5" },
  { src: p6, alt: "Photo 1" },
  { src: p7, alt: "Photo 2" },
  { src: p8, alt: "Photo 3" },
  { src: p9, alt: "Photo 4" },
  { src: p10, alt: "Photo 5" },
   { src: p11, alt: "Photo 1" },
  { src: p12, alt: "Photo 2" },
  { src: p13, alt: "Photo 3" },
  { src: p14, alt: "Photo 4" },
  { src: p15, alt: "Photo 5" },
];

const Photos = () => {
  return (
    <div className="photo-page">
      <h2 className="photo-title">Our Medical Store Photos</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-box" key={index}>
            <img src={photo.src} alt={photo.alt} className="photo-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
