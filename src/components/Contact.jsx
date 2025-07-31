import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Our Medical Store</h2>
          <p>We're here to help you with all your health needs.</p>
          <form
            action="https://formspree.io/f/manbbbqg"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Medical Store Location"
            src="https://www.google.com/maps?q=3X64%2B58J%2C+Bhagwanpur%2C+Haryana+136156&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
