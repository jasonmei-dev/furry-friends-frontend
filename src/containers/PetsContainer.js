import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets, fetchType } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import PageNav from '../components/PageNav'
import Spinner from 'react-bootstrap/Spinner'

class PetsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    const { type, fetchPets, fetchType } = this.props
    if (type) {
      if (type.charAt(type.length - 1) !== "s") {
        fetchType(type, this.state.page)
      } else {
        fetchType(type.slice(0, type.length - 1),this.state.page)
      }
    } else {
      fetchPets(this.state.page)
    }
  }

  nextPage = () =>{
    const { type, fetchPets, fetchType } = this.props
    let nextPage = this.state.page
    nextPage++

    if (type) {
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
    const { type, fetchPets, fetchType } = this.props
    let page = this.state.page
    let previousPage = page--

    if (previousPage <= 1) {
      alert('Unable to go back')
    } else {
      if (type) {
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
      return (
        <Spinner className="spinner" animation="border" role="status">
          <span className="sr-only">Finding Pets...</span>
        </Spinner>
      )
    } else {
      return (
        <>
          <div className='pet-cards'>
            {pets && pets.map(pet => {
              return <PetCard key={pet.id} pet={pet}/>
            })}
          </div>
          
          <PageNav previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page} />
        </>
      )
    }
  }

  render() {
    return (
      <div className="PetsContainer">
      <h3>Furry Friends for Adoption Near You</h3>
        <div className="cards-container">
          {this.handleLoading()}
        </div>
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
