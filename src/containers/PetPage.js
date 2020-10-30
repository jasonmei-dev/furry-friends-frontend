import React, { useEffect } from "react";
import PetDetails from "../components/PetDetails";
import { connect } from "react-redux";
import { getCurrentPet } from "../adapters/PetsAdapter";
import { addNewLike } from "../adapters/LikesAdapter";
import { clearCurrentPet } from "../actions/currentPet";
import ImageSlider from "../components/ImageSlider";

const PetPage = ({ id, pet, loading, addNewLike, getCurrentPet, clearCurrentPet, history}) => {
  useEffect(() => {
    getCurrentPet(id);
    return () => clearCurrentPet();
    // eslint-disable-next-line
  }, [])

  if (loading || pet === null) {
    return <div className="PetPage"><h2>Loading...</h2></div>;
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
}

const mapStateToProps = ({ currentPet }) => ({
  pet: currentPet.pet,
  loading: currentPet.loading,
});

export default connect(mapStateToProps, {
  getCurrentPet,
  addNewLike,
  clearCurrentPet,
})(PetPage);
