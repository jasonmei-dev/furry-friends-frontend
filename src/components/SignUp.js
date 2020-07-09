import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../adapters/SessionsAdapter";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { signup, history } = this.props;
    signup(this.state, history);
  };

  render() {
    const { history } = this.props;
    return (
      <div className="SignUp">
        <h3>Sign Up</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
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
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            City:{" "}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            State:{" "}
            <input
              type="text"
              name="state"
              placeholder="State"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Country:{" "}
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={this.state.country}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Post Code:{" "}
            <input
              type="text"
              name="postcode"
              placeholder="Post Code"
              value={this.state.postcode}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <br></br>
          <input type="submit" value="Sign Up" />
          <button onClick={() => history.push("/")}>Cancel</button>
        </form>
        <br></br>
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
