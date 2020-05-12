import React from 'react';
import Welcome from './Welcome';
import HomeCards from '../containers/HomeCards';
// import PetsContainer from '../containers/PetsContainer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import FilterBar from './FilterBar';

const Home = ({ loggedIn }) => {

  if (!loggedIn) {
    return <Welcome />
  }

  return (
    <div className="Home">
      <HomeCards />
      <Link to="/pets">See more...</Link>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser.id,
  })
}

export default connect (mapStateToProps)(Home)
