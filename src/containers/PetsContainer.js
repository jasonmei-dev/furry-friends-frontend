import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'

class PetsContainer extends Component {

  componentDidMount() {
    this.props.fetchPets()
  }

  handleLoading = () => {
    const { pets, loading } = this.props;

    if (loading) {
      console.log('Loading...')
      return <div>Loading...</div>
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
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    pets: state.petfinder.pets,
    loading: state.loading
  })
}

export default connect (mapStateToProps, { fetchPets })(PetsContainer)
