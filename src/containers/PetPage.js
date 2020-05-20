import React, { Component } from 'react';
import PetDetails from '../components/PetDetails';
import PetCarousel from '../components/PetCarousel';
import { connect } from 'react-redux';
import { getCurrentPet } from '../adapters/PetsAdapter';
import { addNewLike } from '../adapters/LikesAdapter';
import { clearCurrentPet } from '../actions/currentPet';
import Spinner from 'react-bootstrap/Spinner';


class PetPage extends Component {

  componentDidMount() {
    const { id } = this.props
    this.props.getCurrentPet(id);
  }

  componentWillUnmount() {
    const { clearCurrentPet } = this.props
    clearCurrentPet();
  }

  handleLoading = () => {
    const { pet, loading, addNewLike, history } = this.props;

    if (loading || pet === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else {
      return (
        <div className="PetPage">
          <PetCarousel currentPet={pet} />
          <PetDetails currentPet={pet} />
          <button onClick={() => addNewLike(pet)}>Add</button>
          <button onClick={() => history.goBack()}>Back</button>
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

export default connect(mapStateToProps, { getCurrentPet, addNewLike, clearCurrentPet })(PetPage);
