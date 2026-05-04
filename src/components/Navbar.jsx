import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="container navbar">

        <div className="logo">Aditi Nalawade.</div>

        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* <button className="hire-btn">Hire Me</button> */}

      </div>
    </header>
  );
}

export default Navbar;