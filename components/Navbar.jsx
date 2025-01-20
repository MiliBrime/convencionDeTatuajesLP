import React, { useState } from "react";
import { Link } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ translations, toggleLanguage, currentLanguage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    return (
      <nav>
        <div className={`logo-div ${menuOpen ? "hidden" : ""}`}>
            <h1>logo/estrella</h1>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {translations.map((item, index) => (
            <li key={index}>
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={toggleLanguage}>
              {currentLanguage === "es" ? "English" : "Español"}
            </button>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    );
  };
  
  export default Navbar;