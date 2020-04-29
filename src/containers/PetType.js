import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchType } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import Container from 'react-bootstrap/Container'

class PetType extends Component {

  componentDidMount() {
    const { match } = this.props
    const type = match.params.type

    if (type.charAt(type.length - 1) !== "s") {
      this.props.fetchType(type)
    } else {
      this.props.fetchType(type.slice(0, type.length -1))
    }
  }

  handleLoading = () => {
    const { pets, loading } = this.props;
    if (loading) {
      return <p>Loading Pets...</p>
    } else {
      return <div className='PetCards'>
        {pets.map(pet => {
          return <PetCard key={pet.id} petObject={pet}/>
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

export default connect (mapStateToProps, { fetchType })(PetType)
