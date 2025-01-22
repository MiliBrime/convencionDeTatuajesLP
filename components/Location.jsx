import React from "react";

const Location = ({translations}) => {
  return (
    <section id="location" className="location-section">
        <h2>{translations.title}</h2>
        <div className="location-container">
            {/* Mapa embebido con Google Maps */}
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.691135951767!2d-57.9492533!3d-34.9141998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63a039ab9f5%3A0xc78cf3ba44d90320!2sPasaje%20Dardo%20Rocha!5e0!3m2!1ses!2sar!4v1737553584170!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pasaje Dardo Rocha"
                />
        </div>
        {/* Descripción del lugar */}
        <div className="location-info">
          <p>
            {translations.text1}
          </p>
          <p>
            {translations.text2}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Location;
