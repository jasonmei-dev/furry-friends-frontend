import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signupForm';
import { signup } from '../adapters/SessionsAdapter';

const SignUp = ({ signupForm, updateSignUpForm, signup, history }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignUpForm(updatedFormInfo);
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label>First Name: <input type='text' name='first_name' placeholder='First Name' value={signupForm.first_name} onChange={handleInputChange}/></label><br/>
        <label>Last Name: <input type='text' name='last_name' placeholder='Last Name' value={signupForm.last_name} onChange={handleInputChange}/></label><br/>
        <label>Email: <input type='text' name='email' placeholder='Email' value={signupForm.email} onChange={handleInputChange}/></label><br/>
        <label>Password: <input type='text' name='password' placeholder="Password" value={signupForm.password} onChange={handleInputChange}/></label><br/>
        <label>City: <input type='text' name='city' placeholder='City' value={signupForm.city} onChange={handleInputChange}/></label><br/>
        <label>State: <input type='text' name='state' placeholder='State' value={signupForm.state} onChange={handleInputChange}/></label><br/>
        <label>Country: <input type='text' name='country' placeholder='Country' value={signupForm.country} onChange={handleInputChange}/></label><br/>
        <label>Post Code: <input type='text' name='postcode' placeholder='Post Code' value={signupForm.postcode} onChange={handleInputChange}/></label><br/>
        <label></label><input type='submit' value='Sign Up' />
      </form>

      <button onClick={() => history.goBack()}>Cancel</button>
    </div>
  )
};

const mapStateToProps = ({ signupForm }) => {
  return {
    signupForm
  }
};

export default connect(mapStateToProps, { updateSignUpForm, signup })(SignUp);
