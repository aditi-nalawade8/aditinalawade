import "../styles/navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">

        {/* Logo */}
        <div className="logo">Aditi Nalawade.</div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <ul>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>
          </li>

          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="mobile-buttons">

          <a
            href="#projects"
            className="btn-fill"
            onClick={() => setMenuOpen(false)}
          >
            View Portfolio
          </a>

          <a
            href="/cv.pdf"
            className="btn-outline"
            download
          >
            Download CV
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;