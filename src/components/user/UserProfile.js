import React from "react";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import UserLikes from "./UserLikes";

const UserProfile = ({ loggedIn }) => {
  return (
    <div className="Profile">
      <div className="container flex-item">
        {loggedIn && <UserInfo />}
      </div>
      <div className="container flex-item">
        {loggedIn && <UserLikes />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(UserProfile);
