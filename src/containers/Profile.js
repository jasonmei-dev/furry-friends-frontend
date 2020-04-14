import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import MyPets from '../components/MyPets';

class Profile extends Component {

  render() {
    const { currentUser, myPets } = this.props

    return (
      <div className='Profile'>
        Profile
        <UserInfo currentUser={currentUser}/>
        <MyPets myPets={myPets}/>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, myPets }) => {
  return {
    currentUser,
    myPets
  }
}

export default connect(mapStateToProps)(Profile);
