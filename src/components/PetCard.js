import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ petObject }) => {
  let imgUrl, petId

  petObject.photos.length === 0 ? imgUrl = "" : imgUrl = petObject.photos[0].medium
  petObject.pet_api_id ? petId = petObject.pet_api_id : petId = petObject.id

  return (
    <div className='PetCard' id={petObject.id}>
      <div className='pet-image-container'>
        <img className='pet-image' alt={petObject.name} src={imgUrl}></img>
      </div>
      <div className='pet-card-details'>
        <div className='pet-info'>
          <h3>{petObject.name}</h3>
          { petObject.breeds.secondary ? <p>{petObject.breeds.primary} / {petObject.breeds.secondary}</p> : <p>{petObject.breeds.primary}</p> }
        </div>

        <button className='pet-save-button'>Add</button>

        <button className='pet-details-button'>
          <span className='pet-card-link'>
            <Link to={`/pets/${petId}`}>Details</Link>
          </span>
        </button>
      </div>
    </div>
  )
}

export default PetCard
