import React from "react";

const PetCarousel = ({ currentPet }) => {
  const { photos } = currentPet;

  return (
    <div className="carousel">
      {photos.length > 0 ? (
        photos.map((photo, index) => <img alt={index + 1} src={photo.full} />)
      ) : (
        <img alt="default" src="/images/no-photo.jpg" />
      )}
    </div>
  );
};

export default PetCarousel;
