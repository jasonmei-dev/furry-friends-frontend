import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import MyLikes from '../components/MyLikes';

class Profile extends Component {

  render() {
    console.log(this.props)
    const { currentUser } = this.props

    return (
      <div className='Profile'>
      {currentUser.id && <UserInfo currentUser={currentUser}/>}
      {currentUser.id && <MyLikes />}
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Profile);
