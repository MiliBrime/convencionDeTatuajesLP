import React from 'react';

const Footer = ({ translations }) => {
  return (
    <footer className='footer'>
      <p>&copy; 2025 Convención de tatuajes LA PLATA. Todos los derechos reservados.</p>
      <p className='yo'>
        {translations.text}<br />
        <a
          href="https://www.linkedin.com/in/milagros-brime"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milagros Brime
        </a>
      </p>
    </footer>
  );
};

export default Footer;
