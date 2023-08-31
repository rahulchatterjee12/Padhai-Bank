
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import "./Carousel.css";

const images = [
  {
    "src": 'images/Home/Carousel/img1.png',
    "alt": "Image 1 for carousel"
  },
  {
    "src": 'images/Home/Carousel/img2.png',
    "alt": "Image 2 for carousel"
  }, {
    "src": 'images/Home/Carousel/img3.png',
    "alt": "Image 3 for carousel"
  }, {
    "src": 'images/Home/Carousel/img4.png',
    "alt": "Image 4 for carousel"
  },
]



const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className='flex justify-center mt-5'>
      <div className="carousel">
        <Button startIcon={<ArrowBackIosNewIcon />} onClick={prevSlide} />
        {images.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}

        <Button startIcon={< ArrowForwardIosIcon />} onClick={nextSlide} />

        <span className="indicators">
          {images.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  )
}

export default Carousel