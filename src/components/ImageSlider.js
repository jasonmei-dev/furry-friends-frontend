import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    index: 0,
  };

  slideRight = () => {
    const { currentPet } = this.props;
    this.setState({ index: (this.state.index + 1) % currentPet.photos.length });
  };

  slideLeft = () => {
    const { currentPet } = this.props;
    const nextIndex = this.state.index - 1;

    if (nextIndex < 0) {
      this.setState({ index: currentPet.photos.length - 1 });
    } else {
      this.setState({ index: nextIndex });
    }
  };

  render() {
    const { currentPet } = this.props;

    return (
      <div className="ImageSlider">
        <button onClick={this.slideLeft}>
          <i class="fas fa-chevron-left fa-3x"></i>
        </button>
        {currentPet.photos.length > 0 ? (
          <img
            className="pet-image"
            alt={this.state.index}
            src={currentPet.photos[this.state.index].full}
          />
        ) : (
          <img className="pet-image" alt="default" src="/images/no-photo.jpg" />
        )}
        <button onClick={this.slideRight}>
          <i class="fas fa-chevron-right fa-3x"></i>
        </button>
      </div>
    );
  }
}

export default ImageSlider;
