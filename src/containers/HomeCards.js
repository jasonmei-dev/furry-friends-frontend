import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import Spinner from 'react-bootstrap/Spinner'

class HomeCards extends Component {

  componentDidMount() {
    this.props.fetchAllPets()
  }

  handleLoading = () => {
    const { pets, loading } = this.props;
    if (loading) {
      return <Spinner animation="border" role="status"><span className="sr-only">Finding Pets...</span></Spinner>
    } else {
      return <div className='PetCards'>
        {pets.slice(0,4).map(pet => {
          return <PetCard key={pet.id} pet={pet}/>
        })}
      </div>
    }
  }

  render() {
    return (
      <>
        <h3>Furry Friends for Adoption Near You</h3>
        <div className="PetsContainer">
          {this.handleLoading()}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    pets: state.petfinder.pets,
    loading: state.petfinder.loading
  })
}

export default connect (mapStateToProps, { fetchAllPets })(HomeCards)
