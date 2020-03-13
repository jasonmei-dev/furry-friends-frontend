import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'


const Navbar = ({ loggedIn, currentUser }) => {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pets">Browse</NavLink>
      <NavLink to="/profile">{currentUser.first_name}</NavLink>
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
