
import "../App.css"; // custom CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>

      <ul className="navbar__menu">
        <li>Qualifications ▾</li>
        <li>Organizations ▾</li>
        <li>Research & Analysis ▾</li>
        <li>Lorem ipsum ▾</li>
        <li>Lorem ipsum ▾</li>
      </ul>

      <div className="navbar__actions">
        <span className="navbar__search">&#128269;</span>
        <button className="navbar__enrolment">Enrolment</button>
      </div>
    </nav>
  );
}

export default Navbar;
