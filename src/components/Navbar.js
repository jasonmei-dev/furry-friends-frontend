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
      <Link to="/pets">Browse</Link>
      <Link to="/profile">{currentUser.first_name}</Link>
      <Logout />
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser,
    currentUser
  })
}

export default connect(mapStateToProps)(Navbar)
