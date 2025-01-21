import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons"; 

const Navbar = ({ translations, toggleLanguage, currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

  const idMap = {
    Inicio: "hero",
    Información: "info",
    Galería: "galeria",
    Ubicación: "ubicacion",
    Contacto: "contacto",
  };

  return (
    <nav>
      <div className={`logo-div ${menuOpen ? "hidden" : ""}`}>
        <h1>logo/estrella</h1>
      </div>
      
      {/* Selector de idioma fuera del menú */}
      <div className="language-selector">
        <button onClick={toggleLanguageDropdown}>
        <FontAwesomeIcon className="iconotranslation" icon={faLanguage} />
        </button>
        {languageDropdownOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => toggleLanguage("es")}>Español</li>
            <li onClick={() => toggleLanguage("en")}>English</li>
          </ul>
        )}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {translations.list.map((item, index) => (
          <li key={index}>
            <Link 
              to={idMap[item]} 
              smooth={true} 
              duration={500}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
