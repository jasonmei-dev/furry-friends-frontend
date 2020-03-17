import React from 'react';
import Welcome from './Welcome';
import PetsContainer from '../containers/PetsContainer';
import { connect } from 'react-redux';

const Home = ({ loggedIn }) => {

  if (!loggedIn) {
    return <Welcome />
  }

  return (
    <div className="Home">
      <PetsContainer />
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser
  })
}

export default connect (mapStateToProps)(Home)
