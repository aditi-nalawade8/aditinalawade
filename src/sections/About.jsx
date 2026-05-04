import "../styles/about.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about">

        {/* Left Side */}
        <div className="about-left">

          <p className="about-label">ABOUT ME</p>

          <h2>
            Developer with Passion for Building
            <span> Smart Digital Products</span>
          </h2>

          <p className="about-desc">
            I am a fresher Full-Stack and Mobile Developer who enjoys
            building responsive websites, mobile apps, and solving
            real-world problems through clean code.
          </p>

          <p className="about-desc">
            I love learning modern technologies, improving every day,
            and working on products that create real impact.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="contact-btn">
              Contact Me
            </a>

            <div className="social-links">
              <a
                href="https://github.com/aditinalawade02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditinalawade/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/aditinalawade8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="about-right">

          <div className="code-card">

            <div className="code-topbar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

<pre>{`const Developer = {
  name: "Aditi Nalawade",
  skills: [
    "React",
    "Flutter",
    "Node.js",
    "Python",
    "AI/ML"
  ],
  creativeThinker: true,
  quickLearner: true,
  teamPlayer: true,
  hireable: () => true
};`}</pre>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;