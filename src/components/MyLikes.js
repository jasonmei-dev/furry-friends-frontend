import React from 'react';
import PetCard from './PetCard';

const MyLikes = ({ myLikes }) => {
  const petCards = myLikes.map(like => <PetCard key={like.data.attributes.pet.pet_api_id} likeId={like.data.id} petObject={like.data.attributes.pet}/>)
  return (
    <div>
      <h3>Saved Pets</h3>
      {petCards}
    </div>
  )
}

export default MyLikes;
