import React from "react";
import img from "/images/img-conv.jpg";

const Info = ({ translations }) => {
  return (
    <section id="info" className="info-section">
      <div className="info-left">
        <img src={img} alt="Imagen Info" className="info-image" />
      </div>
      <div className="info-right">
        <h2>{translations.heading}</h2>
        {translations.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
};

export default Info;
