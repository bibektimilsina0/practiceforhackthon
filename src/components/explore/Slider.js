import React, { useState, useEffect } from 'react';
import sarangkot from "../collection/image/sarangkot.jpg";
import phewalake from "../collection/image/Phewalake.jpg";
import devisfall from "../collection/image/devisfall.jpg";
import culture from "../collection/image/culture.jpeg";
import adven from "../collection/image/adventure.jpeg"
const Slider = () => {
  const images = [
    sarangkot,
    adven,
    phewalake,
    culture,
    devisfall
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <img className='w-full object-cover' src={images[currentImage]} alt="Slider Image" style={{height:'300px',width:'100%'}} />
    </div>
  );
};

export default Slider;
