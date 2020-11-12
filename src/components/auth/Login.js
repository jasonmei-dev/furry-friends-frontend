import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../adapters/SessionsAdapter";
import { Link } from "react-router-dom";

const Login = ({ login, history }) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { email, password } = user

  const handleInputChange = (event) => setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(user, history);
  };

  return (
    <div className="Login" id="login-form">
      <div className="form-container">
        <div className="form-content">
          <div className="form-group">
            <h2>Login</h2>
            <h3>To Meet Your New Furry Friend!</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input className="btn" type="submit" value="Log In" />
            </div>
          </form>
          <p>Don't have an account? {<Link to="/signup">Sign Up</Link>}</p>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { login })(Login);
