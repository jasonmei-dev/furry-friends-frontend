import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <div className="welcome-content">
          <h1>Find Your New Furry Friend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem quos quod iusto, doloribus itaque.
          </p>
          <Link className="btn login-btn" to="/login">
            Log In
          </Link>
          <Link className="btn signup-btn" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
