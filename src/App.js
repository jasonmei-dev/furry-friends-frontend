import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import { fetchMyPets } from './adapters/PetsAdapter';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import PetsContainer from './containers/PetsContainer'
import Profile from './containers/Profile';
import PetPage from './containers/PetPage';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchMyPets();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={PetsContainer}/>
        <Route exact path="/pets/:id" render={petProps => {
          let id = petProps.match.params.id
          return <PetPage petId={id} />
        }}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}

// const mapStateToProps = ({ myPets }) => {
//   return {
//     myPets
//   }
// }

export default connect(null, { getCurrentUser, fetchMyPets })(App);
