// src/pages/Projects.js

import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Our Milestones</h2>
      <ul className="timeline">
        <li>
          <div className="timeline-date">Mar 2023</div>
          <div className="timeline-content">
            <h3>Funding Received</h3>
            <p>
              We secured the necessary funding to kickstart our club’s projects.
            </p>
          </div>
        </li>

        {/* Top milestone: Funding Received */}
        <li>
          <div className="timeline-date">Mar 2023</div>
          <div className="timeline-content">
            <h3>Funding Received</h3>
            <p>
              We secured the necessary funding to kickstart our club’s projects.
            </p>
          </div>
        </li>
        {/* Next: Project Plan Finalized */}
        <li>
          <div className="timeline-date">Apr 2023</div>
          <div className="timeline-content">
            <h3>Project Plan Finalized</h3>
            <p>
              The project plan was finalized outlining key milestones and deliverables.
            </p>
          </div>
        </li>
        {/* Next: Web Development Team Formed */}
        <li>
          <div className="timeline-date">May 2023</div>
          <div className="timeline-content">
            <h3>Web Development Team Formed</h3>
            <p>
              The web development team was assembled to build the club website.
            </p>
          </div>
        </li>
        {/* Bottom: Team Created */}
        <li>
          <div className="timeline-date">Jun 2023</div>
          <div className="timeline-content">
            <h3>Team Created</h3>
            <p>
              The club was established, uniting passionate individuals in rocketry and innovation.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
