import React, { useState } from "react";
import './App.css';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/info";
import Sponsors from "../components/Sponsors"
import Gallery from "../components/Gallery"
import Location from "../components/Location"
import Contact from "../components/Contact"
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Whatsapp";

import galleryItems from "./data/gallery";
import translations from "./translations/translations";

const App = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  /* const sponsors = [
    { name: "Patrocinador 1", logo: "../images/sponsor.png" },
    { name: "Patrocinador 2", logo: "../images/sponsor.png" },
    { name: "Patrocinador 3", logo: "../images/sponsor.png" },
    { name: "Patrocinador 4", logo: "../images/sponsor.png" },
    { name: "Patrocinador 5", logo: "../images/sponsor.png" },
  ]; */

  return (
    <>
      <Navbar 
        translations={translations[language].navbar} 
        toggleLanguage={toggleLanguage} 
        currentLanguage={language} // Pasa el idioma actual
      />
      <Hero translations={translations[language].hero} />
      <Info translations={translations[language].info} />
      <Sponsors sponsors/* ={sponsors} */ />
      <Gallery items={galleryItems} translations={translations[language].gallery} />
      <Location translations={translations[language].location}/>
      <Contact translations={translations[language].contact}/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
};

export default App;
