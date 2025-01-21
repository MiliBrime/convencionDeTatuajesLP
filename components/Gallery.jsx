import React, { useState } from "react";

const Gallery = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Muestra el elemento seleccionado
  };

  const closeModal = () => {
    setSelectedItem(null); // Cierra la vista ampliada
  };

  return (
    <div className="gallery-container">
      <h3 className="gallery-title">Galería/gallery</h3>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleItemClick(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} alt={item.alt} muted />
            )}
          </div>
        ))}
      </div>

      {/* Modal para mostrar el elemento ampliado */}
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt={selectedItem.alt} />
            ) : (
              <video src={selectedItem.src} controls autoPlay />
            )}
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
