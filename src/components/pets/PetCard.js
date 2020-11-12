import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addNewLike, deleteMyLike } from "../../adapters/LikesAdapter";

const PetCard = ({ likeId, pet, addNewLike, myLikes, deleteMyLike }) => {
  const petId = pet.pet_api_id || pet.id;
  let imgUrl;

  pet.primary_photo_cropped
    ? (imgUrl = pet.primary_photo_cropped.medium)
    : (imgUrl = "/images/no-photo.jpg");

  const like = () => {
    addNewLike(pet);
  };

  const unlike = () => {
    deleteMyLike(likeId);
  };

  return (
    <div className="PetCard" id={petId}>
      <img className="card-image" variant="top" alt={pet.name} src={imgUrl} />
      <div className="card-details">
        <h3>{pet.name}</h3>
        {pet.breeds.secondary ? (
          <p>
            {pet.breeds.primary} / {pet.breeds.secondary}
          </p>
        ) : (
          <p>{pet.breeds.primary}</p>
        )}

        {likeId ? (
          <button onClick={unlike} className="btn">
            Delete
          </button>
        ) : (
          <button onClick={like} className="btn">
            Add
          </button>
        )}

        <button className="btn">
          <Link to={`/pets/${petId}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addNewLike, deleteMyLike })(PetCard);
