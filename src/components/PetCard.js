import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewLike, deleteMyLike } from '../adapters/LikesAdapter';
import Card from 'react-bootstrap/Card';

const PetCard = ({ likeId, pet, addNewLike, myLikes, deleteMyLike }) => {
  console.log(likeId)
  const petId = pet.pet_api_id || pet.id
  let imgUrl

  pet.primary_photo_cropped ? imgUrl = pet.primary_photo_cropped.small : imgUrl = ''

  const like = () => {
    addNewLike(pet);
  }

  const unlike = () => {
    deleteMyLike(likeId);
  }

  return (
    <Card className='PetCard' id={petId}>
      <div className='pet-image-container'>
        <Card.Img className='pet-image' variant= "top" alt={pet.name} src={imgUrl} />
      </div>

      <Card.Body className='pet-card-details'>
        <Card.Title>{pet.name}</Card.Title>
        { pet.breeds.secondary
          ? <Card.Subtitle>{pet.breeds.primary} / {pet.breeds.secondary}</Card.Subtitle>
          : <Card.Subtitle>{pet.breeds.primary}</Card.Subtitle> }

        {likeId
          ? <button onClick={unlike} className='pet-remove-button'>Delete</button>
          : <button onClick={like} className='pet-save-button'>Add</button>}

        <button className='pet-details-button'>
          <Link to={`/pets/${petId}`}>Details</Link>
        </button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, { addNewLike, deleteMyLike })(PetCard);
