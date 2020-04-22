import React from 'react';
import Welcome from './Welcome';
// import PetsContainer from '../containers/PetsContainer';
import { connect } from 'react-redux';
// import FilterBar from './FilterBar';

const Home = ({ loggedIn }) => {

  if (!loggedIn) {
    return <Welcome />
  }

  return (
    <div className="Home">
      Home
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: currentUser.id !== 0
  })
}

export default connect (mapStateToProps)(Home)
