import React from 'react';

const UserInfo = ({ currentUser }) => {
  const { attributes } = currentUser
  const { first_name, last_name, email, city, state, country, postcode } = attributes

  return (
    <div className='UserInfo'>
      <h1>{first_name} {last_name}</h1>
      <ul>
        <li>Email: {email}</li>
        <li>Location: {city}, {state} {postcode}</li>
        <li>Country: {country}</li>
      </ul>
    </div>
  )
}

export default UserInfo;
