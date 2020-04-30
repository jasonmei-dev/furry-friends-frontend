import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets, fetchType } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import PageNav from '../components/PageNav'
import Container from 'react-bootstrap/Container'

class PetsContainer extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    const { match, fetchPets, fetchType } = this.props

    if (match.params.type) {
      const type = match.params.type
      if (type.charAt(type.length - 1) !== "s") {
        fetchType(type, this.state.page)
      } else {
        fetchType(type.slice(0, type.length -1),this.state.page)
      }
    } else {
      fetchPets(this.state.page)
    }
  }

  nextPage = () =>{
    const { match, fetchPets, fetchType } = this.props
    let nextPage = this.state.page
    nextPage++

    if (match.params.type) {
      const type = match.params.type
      if (type.charAt(type.length - 1) !== "s") {
        this.setState({
          page: nextPage
        },fetchType(type, nextPage))
      } else {
        this.setState({
          page: nextPage
        },fetchType(type.slice(0, type.length -1), nextPage))
      }
    } else {
      this.setState({
        page: nextPage
      },fetchPets(nextPage))
    }
  }

  previousPage = () => {
    const { match, fetchPets, fetchType } = this.props
    let page = this.state.page
    let previousPage = page--

    if (previousPage <= 1) {
      alert('Unable to go back')
    } else {
      if (match.params.type) {
        const type = match.params.type
        if (type.charAt(type.length - 1) !== "s") {
          this.setState({
            page: previousPage - 1
          },fetchType(type, previousPage - 1))
        } else {
          this.setState({
            page: previousPage - 1
          },fetchType(type.slice(0, type.length -1), previousPage - 1))
        }
      } else {
        this.setState({
          page: previousPage - 1
        },fetchPets(previousPage - 1))
      }
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

const mapStateToProps = ({ petfinder }) => {
  return {
    pets: petfinder.pets,
    loading: petfinder.loading
  }
}

export default connect (mapStateToProps, { fetchPets, fetchType })(PetsContainer)
