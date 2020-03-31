import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PetCarousel = ({ currentPet }) => {
  const { photos } = currentPet

  return(
    <div className='PetCarousel'>
      <Carousel>
      {photos.map((photo,index) => {
        return <img className='pet-image' key={index + 1} alt={index + 1} src={photo.medium}></img>
      })}
      </Carousel>
    </div>
  )
}

export default PetCarousel;
