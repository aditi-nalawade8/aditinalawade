import "../styles/hero.css";
import profile from "../assets/profile.png";
import resume from "../assets/Aditi_Nalawade.pdf";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero">

        <div className="hero-left">

          <h1>Aditi Nalawade</h1>

          <h2>Full-Stack & Mobile Developer</h2>

          <p>
            Building high-performance mobile experiences and scalable
            full-stack solutions with a focus on clean code and
            user-centric design.
          </p>

          <div className="hero-btns">
            <a href="#portfolio">
              <button className="primary-btn">View Portfolio</button>
            </a>

            <a href={resume} download>
              <button className="light-btn">Download CV</button>
            </a>
          </div>

        </div>

        <div className="hero-right">

          <div className="image-frame">
            <img src={profile} alt="Profile" />
          </div>

          <div className="code-box">&lt;/&gt;</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;