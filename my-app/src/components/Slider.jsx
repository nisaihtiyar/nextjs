"use client"
import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/slide1.jpg', '/slide2.png', '/doktor1.jpg']; // Resim URL'lerini değiştirin

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 "
        onClick={prevSlide}
      >
        Previous
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 "
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;