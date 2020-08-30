import React, { Component } from "react";
import PetDetails from "../components/PetDetails";
// import PetCarousel from "../components/PetCarousel";
import { connect } from "react-redux";
import { getCurrentPet } from "../adapters/PetsAdapter";
import { addNewLike } from "../adapters/LikesAdapter";
import { clearCurrentPet } from "../actions/currentPet";
import Spinner from "react-bootstrap/Spinner";
import ImageSlider from "../components/ImageSlider";

class PetPage extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.getCurrentPet(id);
  }

  componentWillUnmount() {
    const { clearCurrentPet } = this.props;
    clearCurrentPet();
  }

  handleLoading = () => {
    const { pet, loading, addNewLike, history } = this.props;

    if (loading || pet === null) {
      return (
        <Spinner className="spinner" animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <div className="PetPage">
          <ImageSlider currentPet={pet} />
          <div className="flex-container">
            <div className="flex-item">
              <PetDetails currentPet={pet} />
            </div>
            <div className="flex-item">
              <button className="btn" onClick={() => addNewLike(pet)}>
                Add
              </button>
              <button className="btn" onClick={() => history.goBack()}>
                Back
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div className="PetPage">{this.handleLoading()}</div>;
  }
}

const mapStateToProps = ({ currentPet }) => {
  return {
    pet: currentPet.pet,
    loading: currentPet.loading,
  };
};

export default connect(mapStateToProps, {
  getCurrentPet,
  addNewLike,
  clearCurrentPet,
})(PetPage);
