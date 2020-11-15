import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPets, fetchType } from "../../adapters/PetsAdapter";
import PetCard from "./PetCard";
// import { Link } from "react-router-dom";

const PetCards = ({pets, loading, fetchPets, type }) => {
  const pathname = window.location.pathname

  useEffect(() => {
    if (type) {
      if (type.charAt(type.length - 1) !== "s") {
        fetchType(type);
      } else {
        fetchType(type.slice(0, type.length - 1));
      }
    } else {
      fetchPets();
    }
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <div className="HomeCards">
        <h2>Finding Pets...</h2>
      </div>
    );
  } else {
    if (pathname === '/pets' || type) {
      return (
        <div className="PetsContainer">
          <h1>Pets For Adoption Near You</h1>
          <div className="pet-cards">
            {pets &&
              pets.map((pet) => {
                return <PetCard key={pet.id} pet={pet} />;
              })}
          </div>
        </div>
      )
    } else {
      return (
        <div className="HomeCards">
          <h2>Pets For Adoption Near You</h2>
          <div className="pet-cards">
            {pets &&
              pets.slice(0, 4).map((pet) => {
                return <PetCard key={pet.id} pet={pet} />;
              })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ petfinder }) => ({
  pets: petfinder.pets,
  loading: petfinder.loading,
});

export default connect(mapStateToProps, { fetchPets, fetchType })(PetCards);
