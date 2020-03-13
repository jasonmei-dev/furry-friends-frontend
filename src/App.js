import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './adapters/SessionsAdapter';
import PetsContainer from './containers/PetsContainer';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props

    return (
      <div className="App">
      { loggedIn ? <NavBar /> : <Welcome /> }
      { loggedIn? <PetsContainer /> : null }
      <SignUp />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser,
    currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
