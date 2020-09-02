import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPets } from "../adapters/PetsAdapter";
import PetCard from "../components/PetCard";
import { Link } from "react-router-dom";

class HomeCards extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  handleLoading = () => {
    const { pets, loading } = this.props;
    if (loading) {
      return (
        <>
          <h2>Finding Pets...</h2>
        </>
      );
    } else {
      return (
        <>
          <h2>Pets For Adoption Near You</h2>
          <div className="pet-cards">
            {pets &&
              pets.slice(0, 4).map((pet) => {
                return <PetCard key={pet.id} pet={pet} />;
              })}
          </div>

          <button className="btn see-more">
            <Link to="/pets">See More...</Link>
          </button>
        </>
      );
    }
  };

  render() {
    return <div className="HomeCards">{this.handleLoading()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    pets: state.petfinder.pets,
    loading: state.petfinder.loading,
  };
};

export default connect(mapStateToProps, { fetchPets })(HomeCards);
