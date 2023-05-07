import { useState } from "react";
import { useEffect } from "react";
import "../css/Carousel.css";
import imagen1 from '../assets/img/fotoCarrousel1.jpg'
import imagen2 from '../assets/img/imagen2.jpg'
import imagen3 from '../assets/img/imagen3.jpg'
import imagen4 from '../assets/img/imagen4.jpg'
import imagen5 from '../assets/img/imagen5.jpg'


/**

Componente de carrusel de imágenes.
@returns {JSX.Element} Elemento JSX que renderiza el carrusel de imágenes.
*/

export const Carrousel = () => {


    /**
Array de imágenes a mostrar en el carrusel.
@type {string[]}
*/

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        imagen4,
        imagen1,
        imagen2,
        imagen5,
        imagen3
    ];

    /**
Función que avanza al siguiente slide.
*/
    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };


    /**
Función que retrocede al slide anterior.
*/
    const goToPreviousSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };


    /**
Efecto de intervalo que avanza el slide cada 4 segundos.
*/
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 4000);

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
                        <div className="carousel__image-container">
                          <img src={image} alt={`Image ${index}`} />
                          <span className="carousel__spam">
                            Never Stop Climbing
                          </span>
                        </div>
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
