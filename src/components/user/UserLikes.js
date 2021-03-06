import React from "react";
import PetCard from "../pets/PetCard";
import { connect } from "react-redux";

const UserLikes = ({ myLikes }) => {
  const petCards = myLikes.map((like) => (
    <PetCard
      key={like.data.attributes.pet.pet_api_id}
      likeId={like.data.id}
      pet={like.data.attributes.pet}
    />
  ));
  
  if (myLikes.length < 1) {
    return null
  } else {
    return (
      <div className="MyLikes">
        <h1>My Favorites</h1>
        <div className="grid-container">
          <div className="pet-cards">{petCards}</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ myLikes }) => ({
  myLikes
})

export default connect(mapStateToProps)(UserLikes);
