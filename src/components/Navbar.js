import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'


const Navbar = ({ loggedIn, currentUser }) => {
  if (!loggedIn) {
    return (
      <div className="Navbar">
        <Link to="/">Home</Link>
      </div>
    )
  }

  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/profile">{currentUser.attributes.first_name}</Link>
      <Logout />
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: currentUser.id !== 0,
    currentUser
  })
}

export default connect(mapStateToProps)(Navbar)
