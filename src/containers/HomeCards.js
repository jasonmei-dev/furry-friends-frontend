import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import Container from 'react-bootstrap/Container'

class HomeCards extends Component {

  componentDidMount() {
    this.props.fetchAllPets()
  }

  handleLoading = () => {
    const { pets, loading } = this.props;
    if (loading) {
      return <p>Loading Pets...</p>
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
      <Container fluid>
        <h3>Furry Friends for Adoption Near You</h3>
        {this.handleLoading()}
      </Container>
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
