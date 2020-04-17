import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import MyLikes from '../components/MyLikes';

class Profile extends Component {

  render() {
    const { currentUser, myLikes } = this.props

    return (
      <div className='Profile'>
        Profile
        <UserInfo currentUser={currentUser}/>
        <MyLikes myLikes={myLikes}/>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, myLikes }) => {
  return {
    currentUser,
    myLikes
  }
}

export default connect(mapStateToProps)(Profile);
