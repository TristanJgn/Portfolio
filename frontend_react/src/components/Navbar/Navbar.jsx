import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={`link-${item}`} className="navbar__item">
            <div className="navbar__dot" />
            <a className="navbar__link" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
