import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNewLike, deleteMyLike } from '../adapters/LikesAdapter';

class LikeButton extends PureComponent {
  state = {
    liked: false
  }

  toggle = () => {
    const { likeId, pet, addNewLike, deleteMyLike } = this.props

    if (this.state.liked) {
      this.setState({
        liked: !this.state.liked
      },deleteMyLike(likeId))
    } else {
      this.setState({
        liked: !this.state.liked
      }, addNewLike(pet))
    }
  }

  render() {
    return (
      <div>
      <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }

}

export default connect(null, ({ addNewLike, deleteMyLike}))(LikeButton);
