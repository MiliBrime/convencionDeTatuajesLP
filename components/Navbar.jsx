import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from "/images/logo.png"

const Navbar = ({ translations, toggleLanguage, currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  // Referencias para el menú y el icono de la hamburguesa
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

  const idMap = {
    Inicio: "hero",
    Información: "info",
    Galería: "gallery",
    Ubicación: "location",
    Contacto: "contact",
    Information: "info", 
    Gallery: "gallery", 
    Location: "location", 
    Contact: "contact" 
  };

  const handleLanguageChange = (lang) => {
    if (currentLanguage !== lang) {
      toggleLanguage(lang); // Cambia solo si el idioma seleccionado es diferente al actual
      setLanguageDropdownOpen(false); // Cierra el menú desplegable
    }
  };

  // Cierra el menú si se hace clic fuera del menú o del ícono de la hamburguesa
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false); // Cierra el menú si el clic es fuera
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Limpieza cuando el componente se desmonta
    };
  }, []);

  return (
    <nav>
      <div className={`logo-div ${menuOpen ? "hidden" : ""}`}>
        <img className="logo-navbar" src={logo} alt="logo" />
      </div>

      {/* Selector de idioma fuera del menú */}
      
      {/* Menú */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`} ref={menuRef}>
        {translations.list.map((item, index) => (
          <li key={index}>
            <Link to={idMap[item]} smooth={true} duration={500} offset={-150}> {item} </Link>
          </li>
        ))}
      </ul>
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

      {/* Ícono de la hamburguesa */}
      <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
        <FontAwesomeIcon className="hamburguericon" icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
