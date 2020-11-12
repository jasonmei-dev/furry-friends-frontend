import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editUser } from "../../adapters/UserEdit";

const UserEdit = ({currentUser, editUser, history}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  })

  useEffect(() => {
    if (currentUser) {
      setFormData({
        first_name: currentUser.attributes.first_name,
        last_name: currentUser.attributes.last_name,
        email: currentUser.attributes.email,
        city: currentUser.attributes.city,
        state: currentUser.attributes.state,
        country: currentUser.attributes.country,
        postcode: currentUser.attributes.postcode,
      })
    }
  }, [currentUser])

  const { first_name, last_name, email, city, state, country, postcode } = formData

  const handleInputChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    editUser(currentUser, formData);
    history.push("/profile");
  };

  return (
    <div className="UserEdit">
      <div className="form-container">
        <div className="form-content">
          <div className="form-group">
            <h2>Edit Account Information</h2>
          </div>

          <form onSubmit={handleSubmit}>
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

            <div className="flex-container">
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
              </div>

              <div className="flex-group">
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
              <input className="btn" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { editUser })(UserEdit);
