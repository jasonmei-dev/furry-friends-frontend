import React, { useState } from "react";

const ImageSlider = ({currentPet}) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % currentPet.photos.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;

    if (nextIndex < 0) {
      setIndex(currentPet.photos.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <div className="ImageSlider">
      <button onClick={slideLeft}>
        <i className="fas fa-chevron-left fa-3x"></i>
      </button>
      {currentPet.photos.length > 0 ? (
        <img
          className="pet-image"
          alt={index}
          src={currentPet.photos[index].full}
        />
      ) : (
        <img className="pet-image" alt="default" src="/images/no-photo.jpg" />
      )}
      <button onClick={slideRight}>
        <i className="fas fa-chevron-right fa-3x"></i>
      </button>
    </div>
  );
}

export default ImageSlider;
