import React from 'react';
import { connect } from 'react-redux';
import { addNewLike, deleteMyLike } from '../adapters/LikesAdapter';

const LikeButton = ({ pet, addNewLike, deleteMyLike }) => {

  const handleClick = e => {
    console.log('clicked')
  }

  return (
    <button onClick={handleClick}>Like Button</button>
  )
}

export default connect(null, ({ addNewLike, deleteMyLike}))(LikeButton);
