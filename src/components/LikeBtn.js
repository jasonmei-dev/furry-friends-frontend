import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addNewLike, deleteMyLike } from '../adapters/LikesAdapter';

class LikeBtn extends Component {
  state = {
    liked: false
  }

  handleClick = () => {
    console.log('clicked')
    this.setState((prevState) => ({liked: !prevState.liked}))
  }

  render() {
    return(
      <>
      <button onClick={this.handleClick}>
        {this.state.liked ? "♥" : "♡" }
      </button>
      </>
    )
  }

}


export default LikeBtn
