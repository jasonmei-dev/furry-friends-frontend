import React from 'react';
import PetCard from './PetCard';

const MyLikes = ({ myLikes }) => {
  const petCards = myLikes.map(like => <PetCard key={like.data.attributes.pet.pet_api_id} likeId={like.data.id} pet={like.data.attributes.pet}/>)
  return (
    <div className='MyLikes'>
      {petCards}
    </div>
  )
}

export default MyLikes;
