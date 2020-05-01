import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../adapters/SessionsAdapter';

const Logout = ({ logout }) => {

  const handleClick = () => {
    logout()
  }

  return (
    <button onClick={handleClick}>Log Out</button>
  )
}

export default connect(null, { logout })(Logout)
