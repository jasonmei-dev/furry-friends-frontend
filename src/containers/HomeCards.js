import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPets } from '../adapters/PetsAdapter'
import PetCard from '../components/PetCard'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom';

class HomeCards extends Component {
  state = {
    sort: false
  }

  componentDidMount() {
    this.props.fetchPets()
  }

  handleLoading = (pets) => {
    const { loading } = this.props;
    if (loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Finding Pets...</span>
        </Spinner>
      )
    } else {
      return (
        <>
          <div className='PetCards'>
            {pets && pets.map(pet => {
              return <PetCard key={pet.id} pet={pet}/>
            })}
          </div>

          <div>
            <Link to="/pets"><span>See more...</span></Link>
          </div>
        </>
      )
    }
  }

  handleClick = () => {
    // this.setState({
    //   sort: !this.state.sort
    // })
    this.setState((prevState) => {
      return {
        sort: !prevState.sort
      }
    })
  }

  render() {
    const { pets } = this.props
    const firstFour = pets.slice(0,4)
    const petsSorted = [...firstFour].slice(0,4).sort((a,b) => a.name.localeCompare(b.name))

    return (
      <>
      <h3>Furry Friends for Adoption Near You</h3>
      <button onClick={this.handleClick}>Click Me!</button>
      { this.state.sort
        ? <div className="PetsContainer">{this.handleLoading(petsSorted)}</div>
        : <div className="PetsContainer">{this.handleLoading(firstFour)}</div>
      }
      </>
    )
  }
}

// render() {
//    return (
//      <>
//        <h3>Furry Friends for Adoption Near You</h3>
//        <div className="PetsContainer">
//          {this.handleLoading()}
//        </div>
//      </>
//    )
//  }

const mapStateToProps = state => {
  return ({
    pets: state.petfinder.pets,
    loading: state.petfinder.loading
  })
}

export default connect (mapStateToProps, { fetchPets })(HomeCards)
