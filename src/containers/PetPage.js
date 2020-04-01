import React, { Component } from 'react';
import PetDetails from '../components/PetDetails';
import PetCarousel from '../components/PetCarousel';
import { connect } from 'react-redux';
import { getCurrentPet } from '../adapters/PetsAdapter';

class PetPage extends Component {

  componentDidMount() {
    let petId = this.props.petId
    this.props.getCurrentPet(petId);
  }

  handleLoading = () => {
    const { pet, loading } = this.props;

    if (loading || pet === null) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <PetCarousel currentPet={pet} />
          <PetDetails currentPet={pet} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className='PetPage'>
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = ({ currentPet }) => {
  return {
    pet: currentPet.pet,
    loading: currentPet.loading
  }
}

export default connect(mapStateToProps, { getCurrentPet })(PetPage);
