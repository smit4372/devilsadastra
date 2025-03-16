// src/pages/Home.js

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        {/* This inner div (or .hero-content) holds your text or call-to-action */}
        <div className="hero-content">
          <h2>Welcome to Devils Ad Astra</h2>
          <p>
            We're thrilled to have you here! Explore our website to learn more 
            about our mission, ongoing projects, and the awesome team behind it all.
          </p>
        </div>
      </section>

      {/* Other sections go here */}
      <section className="welcome-note">
        <h3>Welcome Note</h3>
        <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent ridiculus potenti montes egestas aliquam consectetur velit. Curae facilisis quisque est habitant malesuada conubia diam diam. Semper dignissim faucibus fames condimentum adipiscing adipiscing. Aptent consequat non blandit vehicula aliquet pellentesque cras tincidunt. Viverra in dis tempus platea fermentum. Convallis cubilia nullam integer facilisi tempus libero.
        </p>

        <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent ridiculus potenti montes egestas aliquam consectetur velit. Curae facilisis quisque est habitant malesuada conubia diam diam. Semper dignissim faucibus fames condimentum adipiscing adipiscing. Aptent consequat non blandit vehicula aliquet pellentesque cras tincidunt. Viverra in dis tempus platea fermentum. Convallis cubilia nullam integer facilisi tempus libero.
        </p>
      </section>
    </div>
  );
}

export default Home;
