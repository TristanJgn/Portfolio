import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src={images.logo} alt="logo" className="navbar__logo" />
      </div>
      <ul className="navbar__list">
        {["home", "about", "experience", "projects", "contact"].map((item) => (
          <li key={`link-${item}`} className="navbar__item">
            <div className="navbar__dot" />
            <a className="navbar__link" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <HiMenuAlt4
          className="navbar-menu__icon"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            className="navbar-menu__container"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              className="navbar-menu__icon navbar-menu__icon--close"
              onClick={() => setToggle(false)}
            />
            <ul className="navbar-menu__list">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <li key={item} className="navbar-menu__item">
                    <a
                      className="navbar-menu__link"
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
