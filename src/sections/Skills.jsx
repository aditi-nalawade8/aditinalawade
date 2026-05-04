import "../styles/skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container skills">

        <p className="skills-label">MY SKILLS</p>

        <h2 className="skills-title">
          Technologies I Use to Build
          <span> Modern Products</span>
        </h2>

        <p className="skills-subtitle">
          I work with modern tools and technologies to create responsive
          websites, scalable backend systems, and beautiful mobile apps.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST API</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Programming</h3>
            <p>Java, Dart, JavaScript, Python</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🛠️</div>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Firebase</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Mobile</h3>
            <p>Flutter, Firebase, Android Studio</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🧠</div>
            <h3>Problem Solving</h3>
            <p>DSA, Logic Building, Debugging</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;