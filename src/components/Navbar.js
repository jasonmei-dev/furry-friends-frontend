import React from "react";
import { connect } from "react-redux";
import { logout } from "../adapters/SessionsAdapter";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, currentUser, logout }) => {
  let types = [
    "Dogs",
    "Cats",
    "Rabbits",
    "Small & Furry",
    "Horses",
    "Birds",
    "Scales, Fins & Other",
    "Barnyard",
  ];

  if (!loggedIn) {
    return (
      <nav id="navbar">
        <h1 className="logo">
          <Link to="/">
            <i className="fas fa-paw"></i> Furry Friends
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav id="navbar">
      <h1 className="logo">
        <Link to="/">
          <i className="fas fa-paw"></i> Furry Friends
        </Link>
      </h1>
      <ul>
        <li>
          Find By Type <i className="fas fa-angle-down"></i>
          <ul>
            {types.map((type) => {
              let typeFixed = type.replace(/\s/gi, "").replace(/\W/gi, "-");
              return (
                <li>
                  <Link
                    to={`/types/${typeFixed.toLowerCase()}`}
                    key={typeFixed}
                  >
                    {type}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <Link to="/profile">{currentUser.attributes.first_name}</Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: currentUser,
    currentUser,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
