import { useState } from "react";
import { useEffect } from "react";
import "../css/Carousel.css";


export const Carrousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
  ];

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 2000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);
  
  return (

    <>

<div className="carousel">
      <div
        className="carousel__wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel__slide" key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel__button--left" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <button className="carousel__button--right" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
    </>
  )
}
