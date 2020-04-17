import React from 'react';
import PetCard from './PetCard';

const MyLikes = ({ myLikes }) => {
  const petCards = myLikes.map(like => <PetCard key={like.data.attributes.pet.pet_api_id} petObject={like.data.attributes.pet}/>)
  return petCards
}

export default MyLikes;
