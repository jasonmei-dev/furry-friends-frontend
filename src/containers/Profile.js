import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
// import MyLikes from '../components/MyLikes';

class Profile extends Component {

  render() {
    const { currentUser } = this.props

    return (
      <div className='Profile'>
        <UserInfo currentUser={currentUser}/>
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
