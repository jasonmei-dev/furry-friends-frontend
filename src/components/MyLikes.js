import React from 'react';
import PetCard from './PetCard';
import { connect } from 'react-redux';

const MyLikes = ({ myLikes }) => {
  const petCards = myLikes.map(like => <PetCard key={like.data.attributes.pet.pet_api_id} likeId={like.data.id} pet={like.data.attributes.pet}/>)

  return (
    <div className='favorites-container'>
      <h1>My Favorites</h1>

      <div className='MyLikes'>
        {petCards}
      </div>
    </div>
  )
}

const mapStateToProps = ({ myLikes }) => {
  return {
    myLikes
  }
}
export default connect(mapStateToProps)(MyLikes);
