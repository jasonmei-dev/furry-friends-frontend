import React from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'


const Welcome = () => {
  return (
    <div className="Welcome">
      <h3>Log In To Meet Your New Furry Friend!</h3>
      <Login />
      <p>Don't have an account? {<Link to='/signup'>Sign Up</Link>}</p>
    </div>
  )
}

export default Welcome
