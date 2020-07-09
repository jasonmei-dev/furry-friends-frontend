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
      <div className="Login">
        <h3>Log In To Meet Your New Furry Friend!</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input type="submit" value="Log In" />
        </form>
        <br></br>
        <p>Don't have an account? {<Link to="/signup">Sign Up</Link>}</p>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
