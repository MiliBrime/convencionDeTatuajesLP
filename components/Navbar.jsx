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
    Galería: "gallery",
    Ubicación: "location",
    Contacto: "contact",
  };

  const handleLanguageChange = (lang) => {
    if (currentLanguage !== lang) {
      toggleLanguage(lang); // Cambia solo si el idioma seleccionado es diferente al actual
      setLanguageDropdownOpen(false); // Cierra el menú desplegable
    }
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
            <li onClick={() => handleLanguageChange("es")}>
              Español
            </li>
            <li onClick={() => handleLanguageChange("en")}>
              English
            </li>
          </ul>
        )}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {translations.list.map((item, index) => (
          <li key={index}>
            <Link to={idMap[item]} smooth={true} duration={500}>
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
