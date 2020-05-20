import React from 'react';
import { Link } from 'react-router-dom';


const UserInfo = ({ currentUser }) => {
  const { attributes } = currentUser
  const { first_name, last_name, email, city, state, country, postcode } = attributes

  return (
    <div className='UserInfo'>
      <h1>{first_name} {last_name}</h1>
      <ul>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Location:</strong> {city}, {state} {postcode}</li>
        <li><strong>Country:</strong> {country}</li>
      </ul>

      <Link to='/profile/edit'><button>Edit</button></Link>
    </div>
  )
}

export default UserInfo;
