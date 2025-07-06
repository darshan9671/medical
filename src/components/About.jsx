import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-heading">About Our Medical Shop</h1>
        <p className="about-subheading">
          Trusted healthcare solutions at your doorstep.
        </p>
        <div className="about-content">
          <p>
            Welcome to <strong>HealthPlus Medical Store</strong>, your trusted partner in health
            and wellness. Located in the heart of your community, we are committed
            to providing high-quality medicines, health products, and professional
            guidance for all your healthcare needs.
          </p>
          <p>
            Our team ensures every product is genuine and stored with utmost care.
            From prescription medications to wellness supplements, we’ve got you
            covered.
          </p>
          <p>
            We believe in compassion, reliability, and affordable healthcare. Your
            well-being is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
