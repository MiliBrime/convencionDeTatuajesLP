import React, { useState } from "react";
import './App.css';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/info";
import translations from "./translations/translations";

const App = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <>
      <Navbar 
        translations={translations[language].navbar} 
        toggleLanguage={toggleLanguage} 
        currentLanguage={language} // Pasa el idioma actual
      />
      <Hero translations={translations[language].hero} />
      <Info translations={translations[language].info} />
    </>
  );
};

export default App;
