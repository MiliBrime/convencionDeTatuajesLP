import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import translations from "../src/translations/translations";


const Contact = ({translations}) => {
  return (
    <section id="contact" className="contact-section">
        <h2 className="titles">{translations.title}</h2>
      <div className="contact-container">
        <p>{translations.text}</p>
        <div className="contact-icons">
          {/* Instagram */}
          <a className="ig" href="https://www.instagram.com/convenciondetatuajeslaplata/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            <span>@convenciondetatuajeslaplata</span>
          </a>
          {/* Facebook */}
          <a className="fb" href="https://www.facebook.com/ConvencionTatuajesLaPlata/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            <span>convencion de tatuajes LA PLATA</span>
          </a>
          {/* WhatsApp */}
          <a className="wsp" href="https://wa.me/2215989651" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>+54 9 221 598-9651</span>
          </a>
          {/* Email */}
          {/* <a href="mailto:youremail@example.com">
          <p>icono</p>
            <span>youremail@example.com</span>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
