import React from "react";
import { connect } from "react-redux";
import UserInfo from "../components/UserInfo";
import MyLikes from "../components/MyLikes";

const Profile = ({ loggedIn }) => {
  return (
    <div className="Profile">
      <div className="container flex-item">
        {loggedIn && <UserInfo />}
      </div>
      <div className="container flex-item">
        {loggedIn && <MyLikes />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
