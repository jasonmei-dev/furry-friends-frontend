import React from "react";
import PetCards from "../pets/PetCards";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({loggedIn}) => {
  if (loggedIn) {
    return (
      <div className="Home">
        <header className="showcase">
          <div className="showcase-content">
            <h1>Find Your New Furry Friend</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem quos quod iusto, doloribus itaque.
            </p>
          </div>
        </header>
        <section className="cards">
          <div className="container">
            <PetCards />
            <button className="btn see-more">
              <Link to="/pets">See More...</Link>
            </button>
          </div>
        </section>
      </div>
    );
  } else {
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
  }
};

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: !!currentUser
})

export default connect(mapStateToProps)(Home);
