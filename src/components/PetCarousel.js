import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const PetCarousel = ({ currentPet }) => {
  const { photos } = currentPet

  return (
    <Carousel>
      {photos.map((photo,index) => {
        return (<Carousel.Item key={index + 1}>
         <Image className="d-block w-100" alt={index + 1} src={photo.full} />
        </Carousel.Item>)
      })}
    </Carousel>
  )
}

export default PetCarousel;
