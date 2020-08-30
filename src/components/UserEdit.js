import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/currentUser";
import { editUser } from "../adapters/UserEdit";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: props.currentUser.attributes.first_name,
      last_name: props.currentUser.attributes.last_name,
      email: props.currentUser.attributes.email,
      city: props.currentUser.attributes.city,
      state: props.currentUser.attributes.state,
      country: props.currentUser.attributes.country,
      postcode: props.currentUser.attributes.postcode,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { currentUser, editUser, history } = this.props;
    const updateData = { user: this.state };
    editUser(currentUser, updateData);
    history.push("/profile");
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="UserEdit">
        <div className="form-container">
          <div className="form-content">
            <div className="form-group">
              <h2>Edit Account Information</h2>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group first-name">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group last-name">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group email">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="flex-container">
                <div className="flex-group">
                  <div className="form-group city">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group state">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={this.state.state}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex-group">
                  <div className="form-group country">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={this.state.country}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group postcode">
                    <label>Post Code</label>
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Post Code"
                      value={this.state.postcode}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input className="btn" type="submit" value="Update" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser, editUser })(UserEdit);
