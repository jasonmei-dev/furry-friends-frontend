import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ petObject }) => {
  let imgUrl
  const petPhotos = petObject.photos

  petPhotos.length === 0 ? imgUrl = "" : imgUrl = petPhotos[0].medium

  return (
    <div className='PetCard' id={petObject.id}>
      <div className='pet-image-container'>
        <img className='pet-image' alt={petObject.name} src={imgUrl}></img>
      </div>
      <div className='pet-card-details'>
        <div className='pet-info'>
          <h3>{petObject.name}</h3>
          { petObject.breeds.secondary !== null ? <p>{petObject.breeds.primary} / {petObject.breeds.secondary}</p> : <p>{petObject.breeds.primary}</p> }
        </div>

        <button className='pet-save-button'>Add</button>
        <Link className='pet-details-button'>Details</Link>
      </div>
    </div>
  )
}

export default PetCard
