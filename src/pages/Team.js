// src/pages/Team.js

import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {/* Vivek Nagaral */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/vivek.jpg */}
          <img
            src="/images/vivek.png"
            alt="Vivek Nagaral"
            className="team-member-image"
          />
          <h3>Vivek Nagaral</h3>
          <p className="role">Rocketry Planning Team</p>
          <p>
            Vivek oversees mission planning and trajectory calculations. He ensures 
            each rocket design meets performance goals from concept to launch.
          </p>
          <a
            href="https://www.linkedin.com/in/vivenagaral/" 
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>

        {/* Dharmesh Chowdahry */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/dharmesh.jpg */}
          <img
            src="/images/dharmesh.png"
            alt="Dharmesh Chowdahry"
            className="team-member-image"
          />
          <h3>Dharmesh Chowdahry</h3>
          <p className="role">Rocketry Planning Team</p>
          <p>
            Dharmesh focuses on propulsion systems, safety protocols, 
            and test procedures to ensure reliable rocket performance.
          </p>
          <a
            href="https://www.linkedin.com/in/dharmesh-chowdhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>

          </a>
        </div>

        {/* Smit Desai */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/smit.jpg */}
          <img
            src="/images/smit.jpg"
            alt="Smit Desai"
            className="team-member-image"
          />
          <h3>Smit Desai</h3>
          <p className="role">Web Development Team</p>
          <p>
            Smit leads the website's design and development, ensuring 
            our digital presence is robust, user-friendly, and visually appealing.
          </p>
          <a
            href="https://www.linkedin.com/in/smitldesai4372/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>

          </a>
        </div>

        {/* Jane Doe */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/smit.jpg */}
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt="Jane Doe"
            className="team-member-image"
          />
          <h3>Jane Doe</h3>
          <p className="role">Management Team</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet hac natoque consectetur erat sociosqu tempus gravida.
          </p>
          <a
            href="https://www.linkedin.com/in/smit-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>

          </a>
        </div>

        {/* Jane Doe */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/smit.jpg */}
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            alt="Jane Doe"
            className="team-member-image"
          />
          <h3>Jane Doe</h3>
          <p className="role">Technical Team</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet hac natoque consectetur erat sociosqu tempus gravida.
          </p>
          <a
            href="https://www.linkedin.com/in/smit-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>

        {/* Jane Doe */}
        <div className="team-member">
          {/* Replace with an actual image path, e.g., /images/smit.jpg */}
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="Jane Doe"
            className="team-member-image"
          />
          <h3>Jane Doe</h3>
          <p className="role">Finance Team</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet hac natoque consectetur erat sociosqu tempus gravida.
          </p>
          <a
            href="https://www.linkedin.com/in/smit-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
