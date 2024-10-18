import React, { useState } from 'react'
import s from './Carousel.module.css'
import { images } from '../../data/images'
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  

  return (
     <div className={s.carousel_container}>
      <div className={s.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${s.carousel_image} ${index === currentIndex ? `${s.carousel_image_shown}` : `${s.carousel_image_hidden}`}`}
          >
            <img
              src={image.src}
              alt={image.description}
            />
            <div className={s.carousel_description}>
              {image.description}
            </div>
          </div>
        ))}
        <button
          className={`${s.carousel_button} ${s.carousel_button_prev}`}
          onClick={handlePrev}
        >
          <img src="/arrow-left.png" alt=""  className={s.button_arrow}/>
        </button>
        <button
           className={`${s.carousel_button} ${s.carousel_button_next}`}
          onClick={handleNext}
        >
           <img src="/arrow-right.png" alt="" className={s.button_arrow}/>
        </button>
      </div>
      <div className={s.dots_container}>
      <div className={s.dots}>
        {images.map((image, index) => (
          <button
            key={index}
            className={` ${currentIndex === index ? `${s.dots_button_active}` : `${s.dots_button}`}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      </div>
      
    </div>
  )
}
