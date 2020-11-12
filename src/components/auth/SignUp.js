import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../adapters/SessionsAdapter";

const SignUp = ({signup, history}) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  })

  const { first_name, last_name, email, password, city, state, country, postcode } = user

  const handleInputChange = (event) => setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(user, history);
  };

  return (
    <div id="signup-form" className="SignUp">
      <div className="form-container">
        <div className="form-content">
          <div className="form-group">
            <h2>Sign Up</h2>
            <h3>To Meet Your New Furry Friend!</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex-container">
              <div className="flex-group">
                <div className="form-group first-name">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={first_name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group last-name">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group email">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group password">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex-group">
                <div className="form-group city">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group state">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group country">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group postcode">
                  <label>Post Code</label>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Post Code"
                    value={postcode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input className="btn" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>Have an account? {<Link to="login">Login</Link>}</p>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { signup })(SignUp);
