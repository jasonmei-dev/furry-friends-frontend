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
      <div id="signup-form" className="SignUp">
        <div className="form-container">
          <div className="form-content">
            <h2>Sign Up</h2>
            <h3>To Meet Your New Furry Friend!</h3>

            <form onSubmit={this.handleSubmit}>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.handleInputChange}
              />

              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.handleInputChange}
              />

              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />

              <label>Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />

              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleInputChange}
              />

              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={this.state.state}
                onChange={this.handleInputChange}
              />

              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={this.state.country}
                onChange={this.handleInputChange}
              />

              <label>Post Code</label>
              <input
                type="text"
                name="postcode"
                placeholder="Post Code"
                value={this.state.postcode}
                onChange={this.handleInputChange}
              />

              <input type="submit" value="Sign Up" />
              <button onClick={() => history.push("/")}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
