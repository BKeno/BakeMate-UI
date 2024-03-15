// src/hooks/useRandomImage.js
import { useState, useEffect } from 'react';
import { images } from '../data/backgroundImages';

const useRandomImage = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, []);

  return bgImage;
};

export default useRandomImage;
