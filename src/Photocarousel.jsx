import React, {useState} from 'react';
import cover1 from './images/Madness.png';
import cover2 from './images/Backcover.JPG';
import './Photocarousel.css';
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'


const images =[cover1, cover2]

const PhotoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const NextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const PrevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className="photo-carousel">
          <button className='image-slider-btn' onClick={PrevSlide} style ={{left: 358}}>
            <ArrowBigLeft/>
          </button>
          <img src={images[currentIndex]}
           alt={`Slide ${currentIndex}`}
          className="carousel-images"
          />
          <button className="image-slider-btn" onClick={NextSlide} style ={{right: 358}}>
            <ArrowBigRight/>
          </button>
        </div>
      );
    };

export default PhotoCarousel

