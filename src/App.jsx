import React, { useState } from "react";
import './App.css';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/info";
import Sponsors from "../components/Sponsors"
import Gallery from "../components/Gallery"

import translations from "./translations/translations";

const App = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };
  const galleryItems = [
    { type: "image", src: "/images/img-conv.jpg", alt: "Imagen 1" },
    { type: "image", src: "images/sponsor.png", alt: "Imagen 2" },
    { type: "video", src: "video1.mp4", alt: "Video 1" },
    { type: "image", src: "image3.jpg", alt: "Imagen 3" },
    { type: "video", src: "video2.mp4", alt: "Video 2" },
    { type: "image", src: "image3.jpg", alt: "Imagen 3" },
  ];

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
    </>
  );
};

export default App;
