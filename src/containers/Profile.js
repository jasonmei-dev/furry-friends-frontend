import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "../components/UserInfo";
import MyLikes from "../components/MyLikes";

class Profile extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="Profile">
        <div className="container flex-item">
          {currentUser && <UserInfo currentUser={currentUser} />}
        </div>
        <div className="container flex-item">
          {currentUser && <MyLikes />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
