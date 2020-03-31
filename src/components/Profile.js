import React from 'react';
import { connect } from 'react-redux';

const Profile = ({currentUser}) => {

  return (
    <div className='Profile'>
      <h1>{currentUser.attributes.first_name} {currentUser.attributes.last_name}</h1>
      <span>Hello</span>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return ({
    currentUser
  })
}

export default connect(mapStateToProps)(Profile);
