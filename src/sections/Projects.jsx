import "../styles/projects.css";
import { FaGithub } from "react-icons/fa";

import caseflow from "../assets/caseflow.jpg";
import traffic from "../assets/traffic.jpg";
import gigconnect from "../assets/gigconnect.jpg";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <p className="projects-label">MY PROJECTS</p>

        <h2 className="projects-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-subtitle">
          Real projects built using Flutter, React, Backend APIs,
          Database and modern technologies.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card left-card">
            <img src={caseflow} alt="CaseFlow" />

            <div className="project-info">
              <span>Dec 2025</span>
              <h3>CaseFlow</h3>

              <p>
                Police case management system with secure case tracking,
                status updates and documentation.
              </p>

              <a
                href="https://github.com/aditi-nalawade8/CaseDesk.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="timeline">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>

          {/* Project 2 */}
          <div className="project-card right-card">
            <img src={traffic} alt="Traffic App" />

            <div className="project-info">
              <span>July 2025</span>
              <h3>Traffic App</h3>

              <p>
                Smart challan management system with realtime updates,
                role based access and approvals.
              </p>

              <a
                href="https://github.com/aditi-nalawade8/CSN_Traffix.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card left-card bottom-card">
            <img src={gigconnect} alt="GigConnect" />

            <div className="project-info">
              <span>2025</span>
              <h3>GigConnect</h3>

              <p>
                Gig marketplace platform where customers post jobs
                and workers accept nearby work.
              </p>

              <a
                href="https://github.com/Adiiipatil29/GigConnect.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;