import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewLike, deleteMyLike } from '../adapters/LikesAdapter';
import LikeButton from './LikeButton';
import Card from 'react-bootstrap/Card';

const PetCard = ({ likeId, petObject, addNewLike, myLikes, deleteMyLike }) => {
  let imgUrl, petId
  console.log(likeId)
  petObject.primary_photo_cropped ? imgUrl = petObject.primary_photo_cropped.small : imgUrl = ''
  petObject.pet_api_id ? petId = petObject.pet_api_id : petId = petObject.id

  const like = () => {
    addNewLike(petObject);
  }

  const unlike = () => {
    deleteMyLike(likeId);
  }

  return (
    <Card className='PetCard' id={petObject.id}>
      <div className='pet-image-container'>
        <Card.Img className='pet-image' variant= "top" alt={petObject.name} src={imgUrl} />
      </div>

      <Card.Body className='pet-card-details'>
        <Card.Title>{petObject.name}</Card.Title>
        { petObject.breeds.secondary ?
          <Card.Subtitle>{petObject.breeds.primary} / {petObject.breeds.secondary}</Card.Subtitle> :
          <Card.Subtitle>{petObject.breeds.primary}</Card.Subtitle> }

        <button onClick={like} className='pet-save-button'>Like</button>
        <button onClick={unlike} className='pet-remove-button'>Unlike</button>
        <LikeButton pet={petObject} />
        <button className='pet-details-button'>
          <Link to={`/pets/${petId}`}>Details</Link>
        </button>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ myLikes }) => {
  return {
    myLikes
  }
}

export default connect(mapStateToProps, { addNewLike, deleteMyLike })(PetCard);
