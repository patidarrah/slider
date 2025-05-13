
import { useState } from "react";
import "../App.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>

      <div className={`navbar__menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li>Qualifications ▾</li>
        <li>Organizations ▾</li>
        <li>Research & Analysis ▾</li>
        <li>Lorem ipsum ▾</li>
        <li>Lorem ipsum ▾</li>
      </div>

      <div className="navbar__actions">
        <span className="navbar__search">&#128269;</span>
        <button className="navbar__enrolment">Enrolment</button>
        <div
          className="navbar__toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
