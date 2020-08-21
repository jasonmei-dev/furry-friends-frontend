import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../adapters/SessionsAdapter";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    login(this.state, history);
  };

  render() {
    return (
      <div className="Login" id="login-form">
        <div className="form-container">
          <div className="form-content">
            <div className="form-group">
              <h2>Login</h2>
              <h3>To Meet Your New Furry Friend!</h3>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
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
}

export default connect(null, { login })(Login);
