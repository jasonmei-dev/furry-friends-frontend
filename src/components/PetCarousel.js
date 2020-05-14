import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PetCarousel = ({ currentPet }) => {
  const { photos } = currentPet

  return (
    <Carousel className="carousel">
      {photos.map((photo,index) => {
        return (<Carousel.Item key={index + 1}>
         <img className="pet-image" alt={index + 1} src={photo.full} />
        </Carousel.Item>)
      })}
    </Carousel>
  )
}

export default PetCarousel;
