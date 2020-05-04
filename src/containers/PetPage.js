import React, { Component } from 'react';
import PetDetails from '../components/PetDetails';
import PetCarousel from '../components/PetCarousel';
import { connect } from 'react-redux';
import { getCurrentPet } from '../adapters/PetsAdapter';
import { addNewLike } from '../adapters/LikesAdapter';


class PetPage extends Component {

  componentDidMount() {
    const { match } = this.props
    this.props.getCurrentPet(match.params.id);
  }

  handleLoading = () => {
    const { pet, loading, addNewLike } = this.props;

    if (loading || pet === null) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <PetCarousel currentPet={pet} />
          <PetDetails currentPet={pet} />
          <button onClick={() => addNewLike(pet)}>Add</button>
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

export default connect(mapStateToProps, { getCurrentPet, addNewLike })(PetPage);
