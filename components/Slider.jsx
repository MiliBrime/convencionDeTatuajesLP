import { useState } from "react";
import catV from "/images/categorias-v.jpg";
import catS from "/images/categorias-s.jpg";
import catD from "/images/categorias-d.jpg";
import catP from "/images/categorias-p.jpg";

const images = [catV, catS, catD, catP];

const Carousel = ({translations}) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
  <>
    <h3 className="categories">{translations.title}</h3>
    <div className="carousel-container-slider">

      <button onClick={prevSlide} className="carousel-button left">‹</button>

      <div className="carousel-slider">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <div key={i} className="carousel-item-slider">
              <img src={img} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="carousel-button right">›</button>
    </div>
</>
  );
};

export default Carousel;
