import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import FilterBar from '../components/FilterBar'

class PetsContainer extends Component {

  componentDidMount() {
    this.props.fetchPets()
  }

  handleLoading = () => {
    const { pets, loading } = this.props;
    if (loading) {
      return <p>Loading Pets...</p>
    } else {
      return <div>
        {pets.map(pet => {
          return <PetCard key={pet.id} petObject={pet}/>
        })}
      </div>
    }
  }

  render() {
    return (
      <div className='PetsContainer'>
        <h3>Furry Friends for Adoption Near You</h3>
        <FilterBar />
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    pets: state.petfinder.pets,
    loading: state.petfinder.loading
  })
}

export default connect (mapStateToProps, { fetchPets })(PetsContainer)
