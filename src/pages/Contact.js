// src/pages/Contact.js

import React, { useState } from "react";
import "./Contact.css"; // We'll define some basic styles below
// If using Font Awesome icons, make sure you have Font Awesome linked in public/index.html or installed via npm.

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    asuEmail: "",
    name: "",
    team: "",
    about: "",
    linkedIn: ""
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send to a backend or show an alert)
    console.log(formData);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p>We would love to hear from you! Please fill out the form below.</p>

      {/* CONTACT FORM */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* ASU Email */}
        <div className="form-group">
          <label htmlFor="asuEmail">ASU Email:</label>
          <input
            type="email"
            id="asuEmail"
            name="asuEmail"
            placeholder="you@asu.edu"
            value={formData.asuEmail}
            onChange={handleChange}
            required
          />
        </div>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team Interest (Dropdown) */}
        <div className="form-group">
          <label htmlFor="team">Team Interested In:</label>
          <select
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Team --</option>
            <option value="Web Development">Web Development</option>
            <option value="Rocketry">Rocketry</option>
            <option value="Technical">Technical</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* About Yourself */}
        <div className="form-group">
          <label htmlFor="about">About Yourself:</label>
          <textarea
            id="about"
            name="about"
            placeholder="Tell us about your background, interests, etc."
            rows="4"
            value={formData.about}
            onChange={handleChange}
          />
        </div>

        {/* LinkedIn Link */}
        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn URL:</label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            placeholder="https://www.linkedin.com/in/your-profile"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* SOCIAL HANDLES */}
      <div className="social-handles">
        <h3>Or reach us on:</h3>
        <div className="icons">
          {/* Instagram */}
          <a
            href="https://instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
          <i class="fa-brands fa-instagram fa-2x"></i>
          </a>

          {/* ASU Sun Devil Sync (no direct icon, using a generic "university" icon) */}
          <a
            href="https://asu.campuslabs.com/engage/organization/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fa fa-university fa-2x" aria-hidden="true"></i>
          </a>

          {/* Discord (requires Font Awesome 5+ or use a generic icon) */}
          <a
            href="https://discord.gg/M6wUGATm"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            {/* For Font Awesome 6: <i className="fa-brands fa-discord fa-2x"></i> */}
            {/* For older FA: <i className="fa fa-comments fa-2x"></i> or something similar */}
            <i class="fa-brands fa-discord fa-2x"></i>
            </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i class="fa-brands fa-facebook fa-2x"></i>

          </a>

          {/* Email */}
          <a
            href="mailto:info@example.com"
            className="icon-link"
          >
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="disclaimer">
        <h4>Disclaimer</h4>
        <p>
          All project details provided here are for informational purposes only 
          and may be subject to updates or changes.
        </p>
      </div>
    </div>
  );
}

export default Contact;
