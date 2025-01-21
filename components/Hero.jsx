import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Hero = ({ translations }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="titulo">{translations.title}</h2>
        <h1 className="typed-text">
          <ReactTyped
            strings={translations.strings}
            typeSpeed={50}
            backSpeed={40}
            backDelay={1000}
            loop={true}
          />
        </h1>
        <div className="buttons">
          {translations.buttons.map((buttonText, index) => (
            <Link 
              key={index} 
              to={index === 0 ? "info" : "contact"} 
              smooth={true} 
              duration={500} 
              className="btn"
            >
              {buttonText}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
