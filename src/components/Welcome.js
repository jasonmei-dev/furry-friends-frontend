import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

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
          <Link class="btn login-btn" to="/login">
            Log In
          </Link>
          <Link class="btn signup-btn" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
