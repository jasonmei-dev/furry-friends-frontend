import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import Container from 'react-bootstrap/Container'
import PageNav from '../components/PageNav'

class PetsContainer extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    this.props.fetchPets(this.state.page)
  }

  nextPage = () =>{
    let nextPage = this.state.page
    nextPage++ //adding one to the page
    this.setState({
      page: nextPage
    },this.props.fetchPets(nextPage))
  }

  previousPage = () => {
    let page = this.state.page
    let previousPage = page--
    previousPage <= 1 ? alert('Unable to go back') : this.setState({page: previousPage - 1},
      this.props.fetchPets(previousPage - 1))
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
      <div>
        <Container fluid>
          <h3>Furry Friends for Adoption Near You</h3>
          {this.handleLoading()}
        </Container>
         <PageNav previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page} />
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
