import "../styles/experience.css";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        <p className="experience-label">EXPERIENCE</p>

        <h2 className="experience-title">
          My <span>Experience</span>
        </h2>

        <div className="experience-wrapper">

          {/* Left Side */}
          <div className="experience-card">

            <p className="exp-badge">Internship</p>

            <h3>Mobile App Developer Intern</h3>

            <h4>
              Farmseasy Tech Solution Private Limited | Hybrid
            </h4>

            <p className="experience-date">
              Oct 2025 – March 2026
            </p>

            <ul>
              <li>
                Working on Flutter-based mobile application development.
              </li>

              <li>
                Implementing UI screens and connecting them with backend APIs.
              </li>

              <li>
                Assisting in REST API integration and database connectivity.
              </li>
            </ul>

          </div>

          {/* Right Side Animated */}
          <div className="experience-visual">

            <div className="circle-glow"></div>

            <div className="floating-icon icon-one">
              <FaMobileAlt />
            </div>

            <div className="floating-icon icon-two">
              <FaServer />
            </div>

            <div className="laptop-card">

              <div className="laptop-topbar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="screen-content">

                <div className="code-line w90"></div>
                <div className="code-line w70"></div>
                <div className="code-line w80"></div>
                <div className="code-line w60"></div>

                <div className="mini-cards">
                  <div className="mini-box">
                    <FaLaptopCode />
                  </div>

                  <div className="mini-box">
                    API
                  </div>

                  <div className="mini-box">
                    DB
                  </div>
                </div>

              </div>

              <div className="laptop-base"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;