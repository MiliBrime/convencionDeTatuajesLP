import React from "react";
import sponsorsimg from "/images/sponsors1.png"

const Sponsors = ({ /* sponsors */ }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
      <h3 className="sponsors titles">Sponsors</h3>
        <img className="sponsorsimg" src={sponsorsimg}></img>

      {/*{sponsors.map((sponsor, index) => (
          <div className="carousel-item" key={`original-${index}`}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
        {/* Duplicado de las imágenes */}
        {/* {sponsors.map((sponsor, index) => (
          <div className="carousel-item" key={`clone-${index}`}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}*/}

      </div>
    </div>
  );
};

export default Sponsors;
