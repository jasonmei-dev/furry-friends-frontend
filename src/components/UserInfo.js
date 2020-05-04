import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ currentUser }) => {
  const { attributes } = currentUser
  const { first_name, last_name, email, city, state, country, postcode } = attributes

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className='UserInfo'>
      <h1>{first_name} {last_name}</h1>
      <ul>
        <li>Email: {email}</li>
        <li>Location: {city}, {state} {postcode}</li>
        <li>Country: {country}</li>
        <button onClick={handleClick}><Link to={`/account/edit`}>Edit</Link></button>
      </ul>
    </div>
  )
}

export default UserInfo;
