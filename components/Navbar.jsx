import React, { useState } from "react";
import { Link } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ translations, toggleLanguage, currentLanguage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {translations.map((item, index) => (
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
          <li>
            <button onClick={toggleLanguage}>
              {currentLanguage === "es" ? "Español" : "English"}
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