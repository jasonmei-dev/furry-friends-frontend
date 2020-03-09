import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import PetsContainer from './containers/PetsContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    // console.log(this.props)
    const { loggedIn, currentUser } = this.props

    return (
      <div className="App">
      { loggedIn ? <h3>Logged in as {currentUser.first_name}</h3> : <h3>Please Log In</h3> }
      { loggedIn ? <Logout /> : <Login /> }
      { loggedIn? <PetsContainer /> : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
