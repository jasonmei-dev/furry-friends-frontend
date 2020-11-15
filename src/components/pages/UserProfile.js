import React from "react";
import { connect } from "react-redux";
import UserInfo from "../user/UserInfo";
import UserLikes from "../user/UserLikes";

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

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: !!currentUser,
});

export default connect(mapStateToProps)(UserProfile);
